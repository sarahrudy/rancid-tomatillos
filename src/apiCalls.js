const baseUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const getMovies = () => {
  return fetch(baseUrl + '/movies')
  .then(res => res.json())
} 