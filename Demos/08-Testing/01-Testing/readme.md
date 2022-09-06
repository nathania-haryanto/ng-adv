# Advanced Testing

[Jasmine Matchers](https://jasmine.github.io/api/edge/matchers.html)

## Wallaby

[Wallaby VS Code Extension](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode)

[Wallaby Free Trial Licence](https://wallabyjs.com/download/)

Enter Licence Key: F1 -> Wallaby.js: Manage Licence Key

Start Testing: F1 -> Wallaby.js: Start

[Wallaby Angular Setup](https://wallabyjs.com/docs/tutorial/angular-cli.html)

### Marble Testing

Installation:

```
npm i jasmine-marbles
```

> Note: [rxjs-marbles](https://github.com/cartant/rxjs-marbles) is an alternative to jasmine-marbles

# Cypress E2E Testing

[Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Cypress Angular Schematic](https://github.com/briebug/cypress-schematic)

```
ng add @briebug/cypress-schematic
```

## Cypress Manual Setup

Install packages: `npm i --save-dev cypress chance`

Modify `package.json` and run using `npm run e2e`

```
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "cypress": "cypress open"
  },
```

Examine sample tests in `/cypress/integration/examples`:

> Note: You can also use [Cypress Angular Schematic](https://github.com/briebug/cypress-schematic) to install Cypress. It saves you from removing Protractor

## Starting Cypress

Execute: `npm run cypress`

When running for the first time

- cypress is installed,
- a popup is shown
- the cypress folder in the project is created

![cypres](./_images/cypress.png)

![cypres](./_images/cypress-popup.png)

## Write a Test

[Writing your first test](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)

- Start your App using `ng serve`

- Create a new file "vouchers.spec.js" in `/cypress/integration/`

- Add a reference to cypress to the top of the page

```
/// <reference types="Cypress" />
```

- Add the following structure to the file below the import

```
context('Demos', () => {
	beforeEach(() => {
		cy.visit('http://localhost:4200/demos');
	});

  //Add test here later

});
```
