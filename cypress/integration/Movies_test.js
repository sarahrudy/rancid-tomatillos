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
            average_rating: 6.666666666666667,
            backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            id: 694919,
            poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
            release_date: "2020-09-29",
            title: "Money Plane",
          },
          {
            average_rating: 4.909090909090909,
            backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
            id: 337401,
            poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
            release_date: "2020-09-04",
            title: "Mulan",
          }
        ]
      }
    })
    cy.get('article')
      .eq(0)
      .contains('Money Plane')
      .get('article')
      .eq(1)
      .contains('Mulan');
  })
})

