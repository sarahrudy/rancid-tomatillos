describe('Movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('cy.hash() - get the current URL hash', () => {
    cy.hash()
      .should('be.empty')
  })

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/')
  })

  it('should have a nav bar with a heading', () => {
    cy.get('h1')
      .contains('RANCID TOMATILLOS')
  })

  
})