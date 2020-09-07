export const environment = {
  production: false,
  authEnabled: false,
  title: 'ngSecurity',
  firebaseConfig: {
    apiKey: 'AIzaSyBaY-j-HJ3exFMM43gqb8nKQcLJfv1Ckmg',
    authDomain: 'brzdemo-89574.firebaseapp.com',
    databaseURL: 'https://brzdemo-89574.firebaseio.com',
    projectId: 'brzdemo-89574',
    storageBucket: 'brzdemo-89574.appspot.com',
    messagingSenderId: '408431131159',
    appId: '1:408431131159:web:09c1583c6e5023e3253a52',
    measurementId: 'G-E6LFDV43X2',
  },
  o365Config: {
    tenant: 'd92b247e-90e0-4469-a129-6a32866c0d0a',
    clientId: '4e60c128-a813-4031-bd99-cf4327cce885',
    cacheLocation: 'localStorage',
    endpoints: {
      graphApiUri: 'https://graph.microsoft.com',
      sharePointUri: 'https://integrationsonline.sharepoint.com',
    },
    returnUrl: 'https://localhost:4200',
  },
};
