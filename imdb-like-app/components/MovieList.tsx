import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { Movie } from "@/redux/slices/moviesSlice"

function MovieList() {
 const movies = useSelector((state: RootState) => state.movies)

 if (!Array.isArray(movies)) {
  return <div>Loading...</div>
}

 return (
  <>
    {movies.map((movie: Movie) => {
     <div key={movie.imdbID}>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
     </div>
    })}
  </>
 )
}

export default MovieList