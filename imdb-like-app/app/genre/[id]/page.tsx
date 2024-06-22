import MoviesCarousel from '@/components/MoviesCarousel'
import Paginations from '@/components/Pagination'
import { getDiscoverMovies } from '@/utils/getMovies'

type Props = {
  params: {
    id: string;
  },
  searchParams: {
    genre: string;
    page: string
  },
};

export default async function GenrePage(
  { params: { id }, searchParams: { genre, page } }: Props) {
  const currentPage = parseInt(page) || 1;
  const moviesData = await getDiscoverMovies(id, undefined, currentPage);
  const { results: movies, total_pages: totalPages } = moviesData;

  const searchParamsObj = { genre }

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-4 xl:mt-42'>
        <h1 className='text-white text-2xl font-bold px-5 lg:px-10 py-5'>
         Results for {genre}
        </h1>
        <MoviesCarousel movies={movies} title='Genre' isVertical />
        <Paginations 
          totalPages={totalPages} 
          currentPage={currentPage} 
          searchParamsObj={searchParamsObj} 
        />
      </div>
    </div>
  )
}