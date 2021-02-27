using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Swagger;

namespace SkillsApi {
    public class Startup {
        private readonly IWebHostEnvironment env;

        public Startup (IWebHostEnvironment environment) {
            env = environment;
        }

        public void ConfigureServices (IServiceCollection services) {
            IConfigurationBuilder cfgBuilder = new ConfigurationBuilder ()
                .SetBasePath (env.ContentRootPath)
                .AddJsonFile ("appsettings.json");
            IConfigurationRoot configuration = cfgBuilder.Build ();

            services.AddSingleton (typeof (IConfigurationRoot), configuration);
            var conStr = configuration["ConnectionStrings:SQLiteDBConnection"];

            //EF

            // SQL Server ... use "SQLServerDBConnection" ConString
            // var conStr = configuration["ConnectionStrings:SQLServerDBConnection"];
            // services.AddEntityFrameworkSqlServer ()
            //     .AddDbContext<SkillDBContext> (options => options.UseSqlServer(conStr));

            // SQLite ... use "SQLiteDBConnection" ConString
            var conStrLite = configuration["ConnectionStrings:SQLiteDBConnection"];
            services.AddEntityFrameworkSqlite ().AddDbContext<SkillDBContext> (options => options.UseSqlite (conStrLite));

            // Cors
            services.AddCors (options => {
                options.AddPolicy ("allowAll",
                    builder => builder
                    .SetIsOriginAllowed (host => true)
                    .AllowAnyMethod ()
                    .AllowAnyHeader ()
                    .AllowCredentials ());
            });

            //Firebase

            var fbProjectId = configuration["Firebase:ProjectId"];

            services
                .AddAuthentication (JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer (options => {
                    options.Authority = "https://securetoken.google.com/" + fbProjectId;
                    options.TokenValidationParameters = new TokenValidationParameters {
                        ValidateIssuer = true,
                        ValidIssuer = "https://securetoken.google.com/" + fbProjectId,
                        ValidateAudience = true,
                        ValidAudience = fbProjectId,
                        ValidateLifetime = true
                    };
                });

            services.AddSwaggerGen (c => {
                c.SwaggerDoc ("v1", new OpenApiInfo { Title = "Skills API", Version = "v1" });
            });

            services.AddControllers ();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, ILoggerFactory loggerFactory) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            }

            if (env.IsDevelopment ()) {
                app.UseStaticFiles (new StaticFileOptions {
                    OnPrepareResponse = context => {
                        context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
                        context.Context.Response.Headers["Pragma"] = "no-cache";
                        context.Context.Response.Headers["Expires"] = "-1";
                    }
                });
            } else { app.UseStaticFiles (); }

            //Swagger
            app.UseSwagger ();
            app.UseSwaggerUI (c => {
                c.SwaggerEndpoint ("/swagger/v1/swagger.json", "Food API");
                c.RoutePrefix = string.Empty;
            });

            //Cors
            app.UseCors ("allowAll");

            app.UseHttpsRedirection ();

            app.UseRouting ();

            // app.UseAuthorization ();

            app.UseEndpoints (endpoints => {
                endpoints.MapControllers ();
            });
        }
    }
}