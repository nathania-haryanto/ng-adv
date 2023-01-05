import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

//run using: npm run build -> schematics .:create-file --dry-run false

export function createFile(_options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        const file = 'hello-world.js';
        const content = `console.log('Hello ng-adv. I hope you enjoy the class!');`;
        tree.create(file, content);

        return tree;
    };
}
