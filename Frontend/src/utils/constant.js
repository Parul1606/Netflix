export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDYwOGNmYjg4MTI0YWRlZDI4NzVmZDM2MzA4M2Y3MCIsIm5iZiI6MTcyNjY1MTIxOC42MjA3NDksInN1YiI6IjY2ZTdjYmJmMzc2OGE3M2Y4ZDkxYjRkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qUVvW-IXopJwTYO-6hBftY5oDPWSZosbHn3CJgBeGz4",
  },
};

export const now_Playing_Movie ="https://api.themoviedb.org/3/movie/now_playing";

export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";

export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";

export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie?query'