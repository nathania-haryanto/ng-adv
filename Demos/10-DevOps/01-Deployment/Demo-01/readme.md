# Using ng deploy to deploy to Firebase

[ng deploy](https://angular.io/cli/deploy)

[Firebase CLI Reference](https://firebase.google.com/docs/cli)

## Demo

Install firebase cli:

```
npm install -g firebase-tools
```

Create a project & app

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

> Note: Adds `@angular/fire`, `firebase` and some util libs as dev dependencies

Updates `.firebaserc`:

```json
"targets": {
    "ng-deploy-ap": {
      "hosting": {
        "ngDeploy": [
          "ng-deploy-ap"
        ]
      }
    }
  }
```

Updates angular.json:

```json
"deploy": {
            "builder": "@angular/fire:deploy",
            "options": {}
          }
```

Run deployment:

```
ng deploy
```

