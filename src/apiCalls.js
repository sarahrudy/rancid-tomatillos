const baseUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2';

export const getMovies = () => {
  return fetch(baseUrl + '/movies').then((res) => res.json());
};

export const getSingleMovie = (id) => {
  return fetch(baseUrl + `/movies/${id}`).then((res) => res.json());
};
