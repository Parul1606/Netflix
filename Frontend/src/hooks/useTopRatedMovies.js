import { getTopRatedMovie } from '../redux/movieSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { options, Top_Rated_Movie } from '../utils/constant';

const useTopRatedMovies = async() => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovie(res.data.results));
    } catch (error) {
        console.log(error);
    }
}

export default useTopRatedMovies;