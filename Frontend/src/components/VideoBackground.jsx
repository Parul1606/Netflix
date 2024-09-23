import React from 'react';
import { useSelector } from 'react-redux';
import useMovieById from '../hooks/useMovieById';

const VideoBackground = ({ movieId }) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  // Fetch movie trailer
  useMovieById(movieId);

  // Handle case where trailerMovie is null or undefined
  if (!trailerMovie || !trailerMovie.key) {
    return <div>No trailer available</div>; // You can show a fallback or loader here
  }

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
