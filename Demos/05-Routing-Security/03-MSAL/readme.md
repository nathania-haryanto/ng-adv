# Using Microsoft Authentication Library - MSAL and NgRx

Sample taken from [Food App](https://github.com/arambazamba/food-app)

- .NET 6 Api 
- Angular 13 UI

## Demo

- Requirements
- Create 2 App Registrations
- Configure Angular MSAL Auth
- Configure Api MSAL

### Requirements

[Azure Trial Account](https://azure.microsoft.com/en-us/free/)

[Azure CLI Installation Guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)

[Getting Started with Azure CLI](https://github.com/arambazamba/ng-adv/tree/feature/msal-auth/Tooling/04-CLI)

> Note: For smoothe execution in VS Code install [Azure CLI Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azurecli) and [Azure Account](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account)

### Create 2 App Registrations

Execute `create-msal-app-reg.azcli`.

Check AppRegistration:

![app-reg](./_images/msal-app.png)

### Configure Angular MSAL Auth


### Configure .NET Api MSAL Auth

[Microsoft identity platform documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/)

[.NET Core Authentication Snippets](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/microsoft-logins?view=aspnetcore-6.0)