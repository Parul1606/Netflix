import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

const MovieList = ({ title, movies, searchMovie=false }) => {
  // Check if the movies array is valid and contains items
  if (!movies || movies.length === 0) {
    return (
      <div className="px-8">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <p className="text-white">No movies available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="px-8">
      <h1 className={`${searchMovie ? "text-black": "text-white" } text-3xl py-4`}>{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex items-center">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                posterPath={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

// Define prop-types
MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  searchMovie: PropTypes.array.isRequired,
};
