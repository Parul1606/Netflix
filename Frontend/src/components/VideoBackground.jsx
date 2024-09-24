import React from 'react';
import { useSelector } from 'react-redux';
import useMovieById from '../hooks/useMovieById';
import PropTypes from 'prop-types';

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  // Fetch movie trailer
  useMovieById(movieId);

  // Handle case where trailerMovie is null or undefined
  if (!trailerMovie || !trailerMovie.key) {
    return <div>No trailer available</div>; // You can show a fallback or loader here
  }

  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

//required prop-types
VideoBackground.propTypes = {
  movieId: PropTypes.number.isRequired,
  bool: PropTypes.bool.isRequired,
};