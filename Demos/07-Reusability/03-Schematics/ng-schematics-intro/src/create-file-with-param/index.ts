import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

//run using: npm run build -> schematics .:create-file-withparam --greeting Ahoj --name Anika --dry-run false

export function createFileWithParam(_options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        console.log('Running schematics with following options', _options);

        const name = _options.name;
        const greeting = _options.greeting;
        const fn = 'hello.js';

        if (tree.exists(fn)) {
            tree.delete(fn);
        }

        tree.create('hello.js', `console.log('${greeting} ${name}!');`);

        return tree;
    };
}
