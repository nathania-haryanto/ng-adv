using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

namespace ngDemoApp
{
    public class Startup
    {
        private IWebHostEnvironment env { get; }
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            Configuration = configuration;
            env = environment;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Configuration
            services.AddSingleton < IConfiguration > (Configuration);  

            var firebaseAuth = Configuration["UseFirebaseAuth"];

            //Firebase Auth
            var fbProjectId = Configuration["FirebaseProjectId"];
            services
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Authority = "https://securetoken.google.com/" + fbProjectId;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = "https://securetoken.google.com/" + fbProjectId,
                        ValidateAudience = true,
                        ValidAudience = fbProjectId,
                        ValidateLifetime = true
                    };
                });

            //Swagger
            services.AddSwaggerGen (c => {
                c.SwaggerDoc ("v1", new OpenApiInfo { Title = "ngDemo API", Version = "v1" });
            });

            //Cors
            services.AddCors (options => {
                options.AddPolicy ("allowAll",
                    builder => builder
                    .SetIsOriginAllowed (host => true)
                    .AllowAnyMethod ()
                    .AllowAnyHeader ()
                    .AllowCredentials ());
            });

            // var corsUrl = Configuration["FrontEndUrl"];
            // services.AddCors(options =>
            // {
            //     options.AddPolicy("Angular",
            //         builder => builder.WithOrigins(corsUrl)
            //         .AllowAnyMethod()
            //         .AllowAnyHeader()
            //         .AllowCredentials());
            // });

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Swagger
            app.UseSwagger ();
            app.UseSwaggerUI (c => {
                c.SwaggerEndpoint ("/swagger/v1/swagger.json", "ngDemo API");
                c.RoutePrefix = string.Empty;
            });

            app.UseCors("allowAll");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
