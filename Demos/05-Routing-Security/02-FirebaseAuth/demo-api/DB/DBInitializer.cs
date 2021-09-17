using System;
using System.Linq;

namespace ngDemoApp
{
    public static class DBInitializer
    {
        public static void Initialize(SkillDBContext context)
        {
            context.Database.EnsureCreated();

            if (context.Skills.FirstOrDefault() == null)
            {
                var sk1 = new Skill { name = "Custom Theme", completed = true, hours = 4, dueDate = DateTime.Now.AddMonths(-1) };
                var sk2 = new Skill { name = "Theme Mixins", completed = false, hours = 3, dueDate = DateTime.Now.AddMonths(-2) };
                var sk3 = new Skill { name = "Light & Dark Theme", completed = false, hours = 2, dueDate = DateTime.Now.AddMonths(2) };
                var sk4 = new Skill { name = "RxJS Operators", completed = true, hours = 5, dueDate = DateTime.Now.AddDays(2)};
                var sk5 = new Skill { name = "Custom Operators", completed = false, hours = 1, dueDate = DateTime.Now.AddYears(1)};

                context.Skills.AddRange(sk1, sk2, sk3, sk4, sk5);

                context.SaveChanges();
            }
        }
    }
}