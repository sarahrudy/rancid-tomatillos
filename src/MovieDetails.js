import './MovieDetails.css';
import React from 'react';

const MovieDetails = (props) => {
  return (
    <section className="single-movie-container">
      <img
        className="banner-photo"
        src={props.movie.backdrop_path}
        alt={`Background banner for ${props.movie.title}`}
      ></img>
      <div className="info">
        <img
          className="movie-poster"
          src={props.movie.poster_path}
          alt={`Poster for ${props.movie.title}`}
        ></img>
      </div>
    </section>
  );
};

export default MovieDetails;

// class MovieDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movie: props,
//       error: '',
//     };
//   }

//   render() {
//     if (this.state.error) {
//       return <h1>{this.state.error}</h1>;
//     }

//     if (!this.state.movie && !this.state.error) {
//       return (
//         <div className="loading-movie">
//           <h1>We are retrieving your movie...</h1>
//         </div>
//       );
//     }

//     if (this.state.movie) {
//       console.log('movie details display', this.props.movie);
//       return (
//         <section className="single-movie-container">
//           <img
//             className="banner-photo"
//             src={this.props.movie.backdrop_path}
//             alt={`Background banner for ${this.props.movie.title}`}
//           ></img>
//           <div className="info">
//             <img
//               className="movie-poster"
//               src={this.props.movie.poster_path}
//               alt={`Poster for ${this.props.movie.title}`}
//             ></img>
//           </div>
//         </section>
//       );
//     }
//   }
// }

// export default MovieDetails;
