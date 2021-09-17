using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ngDemoApp
{
    // [Authorize]
    [Route("api/skills")]
    public class SkillsController : Microsoft.AspNetCore.Mvc.Controller
    {
        private SkillDBContext ctx;

        public SkillsController(SkillDBContext dbctx)
        {
            // skillHub = hub;
            ctx = dbctx;
        }

        // http://localhost:5000/api/skills
        [HttpGet]
        public ActionResult<Skill[]> GetSkills()
        {
            return this.ctx.Skills.ToArray();
        }

        // http://localhost:5000/api/skills/1
        [HttpGet("{id}")]
        public ActionResult<Skill> GetSkill(int id)
        {
            return ctx.Skills.FirstOrDefault(v => v.id == id);
        }

        [HttpGet]
        [Route("init")]
        public IActionResult Init()
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult SaveSkill([FromBody] Skill skill)
        {
            if (skill.id == 0)
            {
                ctx.Skills.Add(skill);
            }
            else
            {
                ctx.Skills.Attach(skill);
                ctx.Entry(skill).State = EntityState.Modified;
            }

            ctx.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public IActionResult  UpdateSkill([FromBody] Skill skill)
        {
            ctx.Skills.Attach(skill);
            ctx.Entry(skill).State = EntityState.Modified;
            ctx.SaveChanges();
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteSkill(int id)
        {
            var skill = ctx.Skills.FirstOrDefault(sk => sk.id == id);
            if (skill != null)
            {
                ctx.Remove(skill);
                ctx.SaveChanges();
            }
            return Ok();
        }
    }
}