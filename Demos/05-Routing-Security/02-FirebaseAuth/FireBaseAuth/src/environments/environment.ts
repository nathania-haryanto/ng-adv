export const environment = {
  production: false,
  authEnabled: false,
  title: 'ngSecurity',
  firebaseConfig: {
    apiKey: "AIzaSyANuhe0585hdB8fdkiPedhJq0QMCuai6so",
    authDomain: "angular-c6f6e.firebaseapp.com",
    databaseURL: "https://angular-c6f6e.firebaseio.com",
    projectId: "angular-c6f6e",
    storageBucket: "angular-c6f6e.appspot.com",
    messagingSenderId: "1065242827410",
    appId: "1:1065242827410:web:0658b9d075e68032"
  },
  o365Config: {
    tenant: 'bb3c3add-6082-4e1a-9773-4fef7e2f780e',
    clientId: 'ac616495-0b28-49a3-8054-6a76a6afb90f',
    cacheLocation: 'localStorage',
    endpoints: {
      graphApiUri: 'https://graph.microsoft.com',
    },
    returnUrl: 'http://localhost:4200',
  },
};
