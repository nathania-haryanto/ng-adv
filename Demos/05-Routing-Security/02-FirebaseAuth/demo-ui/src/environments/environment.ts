export const environment = {
  production: false,
  authEnabled: false,
  title: 'ngSecurity',
  markdownPath: '/assets/markdown/',
  api: 'https://localhost:5001/',
  firebaseConfig: {
    apiKey: 'AIzaSyDK-xtrfT4YBzq4Hzmf5kEwHgHbYw4UQTc',
    authDomain: 'ngrx-firebase-fb51b.firebaseapp.com',
    projectId: 'ngrx-firebase-fb51b',
    storageBucket: 'ngrx-firebase-fb51b.appspot.com',
    messagingSenderId: '141384369616',
    appId: '1:141384369616:web:659d331b4ad7a3f16365d5',
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
