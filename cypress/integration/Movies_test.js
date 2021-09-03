describe('Movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should be able to get the current URL hash', () => {
    cy.hash()
      .should('be.empty')
  })

  it('should be able to get current window.location', () => {
    // https://on.cypress.io/location
    // we will change this to the mock movie data url and fix tests accordingly
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:3000/')
      expect(location.host).to.eq('localhost:3000')
      expect(location.hostname).to.eq('localhost')
      expect(location.origin).to.eq('http://localhost:3000')
      expect(location.pathname).to.eq('/') 
      expect(location.port).to.eq('3000')
      expect(location.protocol).to.eq('http:')
      expect(location.search).to.be.empty
    })
  })

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/')
  })

  it('should have a nav bar with a heading', () => {
    cy.get('h1')
      .contains('RANCID TOMATILLOS')
  })

  it('should render all movies on page load', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .get('.movies-container')     
  })

  
})