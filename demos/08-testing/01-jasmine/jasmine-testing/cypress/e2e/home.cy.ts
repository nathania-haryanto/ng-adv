describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  describe('My Bogus Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    });
  });

  describe('Navbar', () => {
    it('Has the correct Title', () => {
      cy.get('.mat-mdc-card-title').should(
        'contain.text',
        'Advanced Angular Development'
      );
    });
  });
});