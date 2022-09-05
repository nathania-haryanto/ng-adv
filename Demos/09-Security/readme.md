# Advanced Security using NgRx

## Demos

- Firebase Auth with NgRx 
- AzureAD-MSAL: Using MSAL and Microsoft Identity

## Security

### Token based Authentication

[JSON Web Tokens - Jwt](https://jwt.io/)

[OpenID Connect](https://connect2id.com/learn/openid-connect)

[]()

### Firebase

[Firebase](https://firebase.google.com/)

[Firebase Auth](https://firebase.google.com/docs/auth)

### Azure AD - Microsoft Authentication Library (MSAL) - Angular

[MSAL for JavaScript](https://github.com/AzureAD/microsoft-authentication-library-for-js)

[MSAL for Angular](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular)

#### AzureAD-MSAL Sample

A sample demonstrating Microsoft Identity Authentication (former AzureAD) & Authorization inkluding MS Graph

[Azure Trial Account](https://azure.microsoft.com/en-us/free/)

[Microsoft 365 Developer Account - Free](https://developer.microsoft.com/en-us/microsoft-365/dev-program)

[Azure CLI Installation Guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)

Create Microsoft Identity App Registration:

Execute `create-msal-app-reg.azcli`.

> Note: For smoothe execution in VS Code install [Azure CLI Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azurecli) and [Azure Account](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account)

Check AppRegistration:

![app-reg](./_images/msal-app.png)

To make this sample work with your own AppRegistration update `clientId` in `app.module.ts`:

```typescript
function MSALConfigFactory(): Configuration {
  return {
    auth: {
      clientId: 'ffa651f4-e601-4042-9dab-e8170f479099',
      authority: 'https://login.microsoftonline.com/common/',
      validateAuthority: true,
      redirectUri: 'http://localhost:4200/',
      postLogoutRedirectUri: 'http://localhost:4200/',
      navigateToLoginRequestUrl: true,
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: isIE, // set to true for IE 11
    },
  };
}
```

### .NET Core Auth
