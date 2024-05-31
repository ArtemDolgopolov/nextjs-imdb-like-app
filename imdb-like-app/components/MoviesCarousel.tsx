import { Movie } from "@/utils/types"
import MovieCard from "./MovieCard";

type Props = {
 title?: string;
 movies: Movie[];
 isVertical?: boolean
}

function MoviesCarousel({ title, movies, isVertical }: Props) {
 return (
  <div className="z-50">
   <h2 className='text-white'>{title}</h2>
   {movies.map(movie => (
    <MovieCard key={movie.id} movie={movie} />
   ))}
  </div>
 )
}

export default MoviesCarousel