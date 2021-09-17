Notice that this sample has been used to its own module fbauth.module.ts to allow usage in AppRoot

To be able to use Firebase Auth you must:

- Create an account at [Firebase](https://firebase.google.com/)
- Update your Firebase Config in `environment.ts`

   ```
   firebaseConfig: {
      ...
   },
   ```

- Register FirebaseAuthInterceptor in `demos.module.ts`:

   ```json
   providers: [
      ...,
      {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseAuthInterceptor,
      multi: true,
      },
   ],
   ```