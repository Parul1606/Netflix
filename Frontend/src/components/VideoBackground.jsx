import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({movieId}) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  useMovieById(movieId);
  console.log(trailerMovie);

  return (
    <div className="w-screen">
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerMovie.key}?si=K02-qY1ofB5BNi65&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder='0'
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
