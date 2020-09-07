using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace SkillsApi
{
    // [Authorize]
    [Route("api/skills")]
    public class SkillsController : Microsoft.AspNetCore.Mvc.Controller
    {
        private SkillDBContext ctx;
        private IHubContext<SkillHub> skillHub;

        public SkillsController(SkillDBContext dbctx, IHubContext<SkillHub> hub)
        {
            ctx = dbctx;
            skillHub = hub;
        }

        [HttpGet]
        [Route("init")]
        public IActionResult Init()
        {
            BroadcastMarkers();
            return Ok();
        }

        private void BroadcastMarkers()
        {
            Skill[] markers = this.ctx.Skills.ToArray();
            skillHub.Clients.All.SendAsync("skillsChanged", markers);
        }

        // http://localhost:5000/api/skills
        [HttpGet]
        public ActionResult<Skill[]> Get()
        {
            return this.ctx.Skills.ToArray();
        }

        // http://localhost:5000/api/skills/1
        [HttpGet("{id}")]
        public ActionResult<Skill> Get(int id)
        {
            return ctx.Skills.FirstOrDefault(v => v.Id == id);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Skill m)
        {
            if (m.Id == 0)
            {
                ctx.Skills.Add(m);
            }
            else
            {
                ctx.Skills.Attach(m);
                ctx.Entry(m).State = EntityState.Modified;
            }

            ctx.SaveChanges();
             BroadcastMarkers();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var v = ctx.Skills.FirstOrDefault(m => m.Id == id);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
             BroadcastMarkers();
            return Ok();
        }
    }
}