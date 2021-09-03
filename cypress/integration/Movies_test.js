describe('Movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });

  it('should be able to visit the url', () => {
    cy.get('h1').contains('RANCID TOMATILLOS');
  });
});