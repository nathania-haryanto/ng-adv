# Using Microsoft Authentication Library - MSAL and NgRx

Sample taken from [Food App](https://github.com/arambazamba/food-app)

- .NET 6 Api 
- Angular 13 UI

[Microsoft identity platform documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/)

[MSAL Auth Flows](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-authentication-flows)

[.NET Core Authentication Snippets](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/microsoft-logins?view=aspnetcore-6.0)

## Demo

- Requirements
- Create 2 App Registrations
- Configure Angular MSAL Auth
- Configure Api MSAL

### Requirements

- [Azure Trial Account](https://azure.microsoft.com/en-us/free/)

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)

- [Getting Started with Azure CLI](https://github.com/arambazamba/ng-adv/tree/feature/msal-auth/Tooling/04-CLI)

    > Note: For Visual Studio Code integration install [Azure CLI Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azurecli) and [Azure Account](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account)

### Create 2 App Registrations

Execute `create-msal-app-reg.azcli`.

Check AppRegistration:

![app-reg](./_images/msal-app.png)

### Configure Angular MSAL Auth


### Configure .NET Api MSAL Auth

`appsettings.json`:

```json
{
  "AzureAd": {
      "TenantId": "d92b247e-...",
      "ClientId": "b509d389-...",
      "Instance": "https://login.microsoftonline.com/",
      "cacheLocation": "localStorage",
  },
```

`Startup.cs`:

```c#
public void ConfigureServices(IServiceCollection services)

  services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
      .AddMicrosoftIdentityWebApi(Configuration)
      .EnableTokenAcquisitionToCallDownstreamApi()
      .AddInMemoryTokenCaches();

  services.AddAuthorization();
```

```c#
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)

  app.UseCors("default");
  app.UseHttpsRedirection();
  app.UseRouting();
  app.UseAuthentication();
  app.UseAuthorization();
```

`FoodController.cs`:

```c#
[Authorize]
[Route ("[controller]")]
[ApiController]
public class FoodController : ControllerBase {

  static readonly string[] scopeRequiredByApi = new string[] { "access_as_user" };

  [HttpGet ()]
  public IEnumerable<FoodItem> GetFood () {
      HttpContext.VerifyUserHasAnyAcceptedScope(scopeRequiredByApi);
      return ctx.Food.ToArray ();
  }
```