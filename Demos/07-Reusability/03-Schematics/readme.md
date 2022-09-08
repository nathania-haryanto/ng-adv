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

Create a schematics project with one schematic called `ng-schematics-intro`

```
schematics blank --name=ng-schematics-intro
cd ng-schematics-intro
```

> Note: The schematic is registered in `collection.json` and implemented in `./ng-schematics-intro/index.ts`

Build & Run Schematics locally:

```
npm run build
schematics .:ng-schematics-intro --dry-run false
```

> Note: You can also start `npm run build -- -w` in a separate terminal so it automatically rebuild your schematic project when a file changes

Add another Schematic to the same project (from inside the folder):

```
schematics blank --name=create-file
```

`collection.json` should look like this:

```json
{
  "$schema": "../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
    "ng-schematics-intro": {
      "description": "A blank schematic.",
      "factory": "./ng-schematics-intro/index#schematicsWs"
    },
    "create-file": {
      "description": "A blank schematic.",
      "factory": "./create-file/index#createFile"
    }
  }
}
```

Add the following code to `create-file/index.ts`:

```javascript
export function createFile(_options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        const file = 'hello-world.js';
        const content = `console.log('Hello ng-adv. I hope you enjoy the class!');`;
        tree.create(file, content);

        return tree;
    };
}
```
Build & run schematics locally that should create a file in the root of your project:

```
npm run build
schematics .:create-file --dry-run false
```

## Using a Sandbox

A Sandbox allows you to better test your schematic. To generate Sandbox from within Schematics project run:

```
ng new sandbox --routing --style scss
```

Update Scripts in `package.json` of the sandbox project:

```json
  "scripts": {
    ...
    "clean": "git checkout HEAD -- sandbox && git clean -f -d sandbox",
    "link:schematic": "npm link && cd sandbox && npm link ng-schematics-intro",
    "launch:create-file": "cd sandbox && ng g ng-schematics-intro:create-file",
    "launch:create-file-withparam": "cd sandbox && ng g ng-schematics-intro:create-file-withparam --greeting Szia --name Emese --dry-run false"
  },
```

Scaffold a new Schematic that generates a Component - just like `ng g c NAME` does:

```
schematics blank --name create-demo-comp
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
ng g ng-schematics-intro:create-comp --greeting Szia --name Emese
```

---

Samples are inspired by [Angular Schematics Workshop](https://github.com/tomastrajan/workshop-angular-schematics) by Tomas Trajan
