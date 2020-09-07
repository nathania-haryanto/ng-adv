/// <reference types="Cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('https://localhost:4200/');
  });

  describe('My Bogus Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    });
  });

  describe('Navbar', () => {
    it('Has the correct Title', () => {
      cy.get('.navTitle').should(
        'contain.text',
        'Advanced Angular Development'
      );
    });
  });
});
