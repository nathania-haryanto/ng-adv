using System;
using System.ComponentModel.DataAnnotations;

namespace ngDemoApp
{
    public class Skill
    {
        public int id { get; set; }

        [RequiredAttribute]
        public string name { get; set; }
        public int hours { get; set; }
        public bool completed { get; set; }
        public DateTime dueDate { get; set; }        

    }
}