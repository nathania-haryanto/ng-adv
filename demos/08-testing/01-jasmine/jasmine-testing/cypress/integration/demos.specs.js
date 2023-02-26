/// <reference types="Cypress" />

context('Demos', () => {
  beforeEach(() => {
    cy.visit('https://localhost:4200/demos/');
  });

  describe('Left Menu', () => {
    it('Shows the menu when clicked', () => {
      cy.get('.clickable').first().click();
    });

    it('Has 16 options in Testing menu', () => {
      cy.get('.clickable').first().click();
      cy.get('button.mat-raised-button').should('have.length', 16);
    });

    it('Shows the correct content when clicking test pipe', () => {
      cy.get('.clickable').first().click();
      cy.contains('Test Pipe').click({ force: true });
      cy.contains('TestPipeComponent');
    });
  });
});
