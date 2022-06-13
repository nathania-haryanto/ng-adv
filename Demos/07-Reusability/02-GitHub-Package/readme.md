# Publish Angular Lib to GitHub

Build Library from previous demo:

```
ng build --project ux-controls -c production
```

Create an npm package:

```
cd dist/ux-controls
npm pack
```

Sign up for [GitHub Package Registry](https://github.com/features/package-registry)

Authenticate to GitHub using personal token and store it in your personal .npmrc file:

@arambazamba:registry=https://npm.pkg.github.com/ 
//npm.pkg.github.com/:_authToken=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