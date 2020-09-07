using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace SkillsApi {
    // [Authorize]
    [Route ("api/demos")]
    public class DemosController : Microsoft.AspNetCore.Mvc.Controller {
        private SkillDBContext ctx;

        public DemosController (SkillDBContext dbctx) {
            ctx = dbctx;
        }

        // http://localhost:5000/api/demos
        [HttpGet]
        public ActionResult<Demo[]> Get () {
            return this.ctx.Demos.ToArray ();
        }

        // http://localhost:5000/api/demos/1
        [HttpGet ("{id}")]
        public ActionResult<Demo> Get (int id) {
            return ctx.Demos.FirstOrDefault (v => v.id == id);
        }

        // http://localhost:5000/api/demos
        [HttpPost]
        public IActionResult Post ([FromBody] Demo m) {
            if (m.id == 0) {
                ctx.Demos.Add (m);
            } else {
                ctx.Demos.Attach (m);
                ctx.Entry (m).State = EntityState.Modified;
            }

            ctx.SaveChanges ();
            return Ok ();
        }

        [HttpDelete ("{id}")]
        public IActionResult Delete (int id) {
            var v = ctx.Demos.FirstOrDefault (m => m.id == id);
            if (v != null) {
                ctx.Remove (v);
                ctx.SaveChanges ();
            }
            return Ok ();
        }
    }
}