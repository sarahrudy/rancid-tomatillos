const baseUrl = 'https://rancid-tomatillos.herokuapp.com/api/v2';

export const getMovies = async () => {
  const res = await fetch(baseUrl + '/movies');
  return await res.json();
};

export const getSingleMovie = async (id) => {
  const res = await fetch(baseUrl + `/movies/${id}`);
  return await res.json();
};
