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
    [Route("api/topics")]
    public class TopicsController : Microsoft.AspNetCore.Mvc.Controller
    {
        private SkillDBContext ctx;

        public TopicsController(SkillDBContext dbctx)
        {
            ctx = dbctx;
        }

        // http://localhost:5000/api/topics
        [HttpGet]
        public ActionResult<Topic[]> Get()
        {
            return this.ctx.Topics.ToArray();
        }

        // http://localhost:5000/api/topics/1
        [HttpGet("{id}")]
        public ActionResult<Topic> Get(int id)
        {
            return ctx.Topics.FirstOrDefault(v => v.id == id);
        }

        // http://localhost:5000/api/topics
        [HttpPost]
        public IActionResult Post([FromBody] Topic m)
        {
            if (m.id == 0)
            {
                ctx.Topics.Add(m);
            }
            else
            {
                ctx.Topics.Attach(m);
                ctx.Entry(m).State = EntityState.Modified;
            }

            ctx.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var v = ctx.Topics.FirstOrDefault(m => m.id == id);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
            return Ok();
        }
    }
}