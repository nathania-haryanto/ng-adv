# Using ng deploy to deploy to Firebase

[ng deploy](https://angular.io/cli/deploy)

[Firebase CLI Reference](https://firebase.google.com/docs/cli)

## Demo

Install firebase cli:

```
npm install -g firebase-tools
```

Create a project & app in [firebase console](https://console.firebase.google.com/).

```
firebase login
```

![firebase-deploy](_images/firebase-deploy.png)

List Projects:

```
firebase projects:list
```

Add Firebase Deploy:

```
ng add @angular/fire
```

> Note: ng add @angular/fire adds `@angular/fire`, `firebase` and some util libs as dev dependencies and updates `.firebaserc`:

Updates angular.json:

```json
"deploy": {
  "builder": "@angular/fire:deploy",
  "options": {
    "prerender": false,
    "ssr": false,
    "browserTarget": "ngDeploy:build:production",
    "firebaseProject": "fir-app-de2ba",
    "firebaseHostingSite": "fir-app-de2ba"
  }
}
```

Run deployment:

```
ng deploy
```