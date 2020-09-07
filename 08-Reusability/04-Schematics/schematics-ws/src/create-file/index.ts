import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

//run using: npm run build -> schematics .:create-file --dry-run false

export function createFile(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const file = 'hello.js';
    const content = `console.log('Hello ngAdv')`;
    tree.create(file, content);

    return tree;
  };
}
