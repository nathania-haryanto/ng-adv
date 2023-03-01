describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/demos', { fixture: 'demos.json' })
    cy.visit('http://localhost:4200/demos/');
    cy.viewport(580, 800);
  });

  describe('Left Menu', () => {
    it('Shows the menu when clicked', () => {
      cy.get('#hamburger').first().click();
    });

    it('Has 4 options in Testing menu', () => {
      cy.get('#hamburger').first().click();
      cy.get('.demoitem').should('have.length', 4);
    });

    it('Shows the correct content when clicking test pipe', () => {
      cy.get('#hamburger').first().click();
      cy.contains('Into Unit Testing').click({ force: true });
      cy.contains('UnitTestingComponent');
    });
  });
})