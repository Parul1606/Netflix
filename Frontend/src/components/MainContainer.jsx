import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector(store => store.movie?.nowPlayingMovies);

  // Early return with fallback UI if movies are not loaded or empty
  if (!movie || movie.length < 5) {
    return <div>Loading or no movie data available</div>; // Handle loading or empty state
  }

  // Destructuring only after checking the movie array has sufficient items
  const { overview, id, title } = movie[4];

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
