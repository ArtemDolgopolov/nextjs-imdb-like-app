import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/utils/getMovies";

type Props = {
 params: {
  id: string;
 },
 searchParams: {
  genre: string
 }
};

export default async function GenrePage(
 { params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id)

  return (
    <div className='max-w-7xl mx-auto'>
     <div className='flex flex-col space-y-4 mt-4 xl:mt-42'>
      <h1 className='text-white text-2xl font-bold px-5 lg:px-10 py-5'>Results for {genre}</h1>
       <MoviesCarousel movies={movies} title='Genre' isVertical />
     </div>
    </div>
  )
}