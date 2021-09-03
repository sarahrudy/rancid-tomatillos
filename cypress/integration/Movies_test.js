describe('Movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
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

  it('should be able to display movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      body: {
        movies: [
          {
            average_rating: 5,
            backdrop_path: "https://image.tmdb.org/t/p/original//9guoVF7zayiiUq5ulKQpt375VIy.jpg",
            id: 592350,
            poster_path: "https://image.tmdb.org/t/p/original//zGVbrulkupqpbwgiNedkJPyQum4.jpg",
            release_date: "2019-12-20",
            title: "My Hero Academia: Heroes Rising",
          },
          {
            average_rating: 4.75,
            backdrop_path: "https://image.tmdb.org/t/p/original//AdqOBPw4PdtzOcfEuQuZ8MNeTKb.jpg",
            id: 413518,
            poster_path: "https://image.tmdb.org/t/p/original//4w1ItwCJCTtSi9nPfJC1vU6NIVg.jpg",
            release_date: "2019-12-19",
            title: "Pinocchio",
          }
        ]
      }
    })
    cy.request('http://localhost:3000/')
      .get('article').eq(0).contains("https://image.tmdb.org/t/p/original//zGVbrulkupqpbwgiNedkJPyQum4.jpg")
  })
})



  //   it('should be able to click on a movie and see its details', () => {
  //   cy.get('.movie[href="/movies/352426"]')
  //     .click()
  // })

  // it('cy.url() - get the current URL', () => {
  //   // https://on.cypress.io/url
  //   cy.url().should('eq', 'https://example.cypress.io/commands/location')
  // })
