import MovieCard from "./MovieCard";
import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-8">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
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

//define prop-types
MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};
