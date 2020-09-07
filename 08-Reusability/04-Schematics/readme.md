# Schematics

[Schematics Overview](https://angular.io/guide/schematics)

[Schematics Starter with Sandbox](https://github.com/schuchard/schematic-starter)

[Schematics Best Practices](https://brenden.codes/posts/angular-schematics-best-practices/)

[AST Explorer](https://astexplorer.net/)

## Schematics available on the web

[Jest Angular Schematic](https://github.com/briebug/jest-schematic)

[Cypress Angular Schematic](https://github.com/briebug/cypress-schematic)

[Schematics Prettier](https://github.com/schuchard/prettier-schematic)

## Getting Started

Install Schematics CLI:

```
npm i -g @angular-devkit/schematics @angular-devkit/schematics-cli
```

Create a Schematics Project with one Schematic called `schematics-ws`

```
schematics blank --name=schematics-ws
cd schematics-ws
```

> Note: The schematic is registered in `collection.json` and implemented in `./schematics-ws/index.ts`

Build & Run Schematics locally:

```
npm run build
schematics .:schematics-ws --dry-run false
```

> Note: You can also start `npm run build -- -w` in a separate terminal so it automatically rebuild your schematic project when a file changes

Add another Schematic to the same project (from inside the folder):

```
schematics blank --name=create-file
```

collection.json should look like this:

```
{
  "$schema": "../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
    "schematics-ws": {
      "description": "A blank schematic.",
      "factory": "./schematics-ws/index#schematicsWs"
    },
    "create-file": {
      "description": "A blank schematic.",
      "factory": "./create-file/index#createFile"
    }
  }
}
```

Build & Run Schematics locally:

```
npm run build
schematics .:create-file --dry-run false
```

## Using a Sandbox

Generate Sandbox from within Schematics project:

```
ng new sandbox
```

> Note: A Sandbox is used to test your Schematic

Update Scripts:

```
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "npm run sandbox:ng-add && npm run test:sandbox",
    "clean": "git checkout HEAD -- sandbox && git clean -f -d sandbox",
    "link:schematic": "npm link && cd sandbox && npm link schematics-ws",
    "launch:create-file": "cd sandbox && ng g schematics-ws:create-file",
    "launch:create-file-withparam": "cd sandbox && ng g schematics-ws:create-file-withparam --greeting Szia --name Emese --dry-run false"
  },
```

> Note: The original "test"-script was: `"test": "npm run build && jasmine src/**/*_spec.js"`. A backup is inculeded as package.json.starter. The modified version is included as package.json.sandbox

Scaffold a new Schematic that generates a Component - just like `ng g c NAME` does:

```
schematics blank --name create-comp
```

> Note: Take the implementation from the finished sampel

Run in Sandbox using Scripts:

```
npm run build
npm run link:schematic
npm run launch:create-file
```

Run like you would do in an ordinary proj:

```
cd .\sandbox\
ng g schematics-ws:create-comp --greeting Szia --name Emese
```

---

Samples are inspired by [Angular Schematics Workshop](https://github.com/tomastrajan/workshop-angular-schematics) by Tomas Trajan
