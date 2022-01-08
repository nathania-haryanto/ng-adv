# Jest

[Jest Testing](https://jestjs.io/)

[JestVS Code Extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

## Jest Installation

Three ways to install Jest:

- Manual - described below
- Using [Schematics](https://github.com/briebug/jest-schematic)
- Using Nrwl Nx (https://nx.dev/angular)

### Manual Jest installation

Remove Karma Libs:

```
npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
```

Remove Karma files: `./karma.conf.js` `./src/test.ts`

Install Jest:

Install `@angular-builders/jest` and `jest`:

```
npm i -D jest @types/jest @angular-builders/jest
```

Install core-js:

```
npm i core-js -D
```

Update your Typescript configurations:

- Remove `test.ts` from files array

  > This file was responsible for Karma setup, you don’t need it here anymore

- Replace jasmine in types array of `tsconfig.spec.json` with jest

  > You want your tests to be type-checked against Jest typings and not Jasmine

```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["jest", "node"]
  },
  "files": ["src/polyfills.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

- Add `jest` to types array in `tsconfig.json` & add `"esModuleInterop": true`

```
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "module": "esnext",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "importHelpers": true,
    "target": "es2015",
    "typeRoots": ["node_modules/@types"],
    "lib": ["es2017", "es2018", "dom", "esnext"],
    "types": ["jest"]
  }
}

```

Update `angular.json`:

```
  "test": {
          "builder": "@angular-builders/jest:run",
          "options": {
            "no-cache": true,
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"],
            "scripts": []
          }
        },
```

Run Tests:

```
ng test
```