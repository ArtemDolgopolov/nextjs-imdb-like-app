import { notFound } from 'next/navigation'
import { getSearchedMovies, getPopularMovies } from '@/utils/getMovies'
import MoviesCarousel from '@/components/MoviesCarousel'
import Paginations from '@/components/Pagination'

type Props = {
 params: {
  term: string;
 },
 searchParams: {
   page: string
 }
};

export default async function SearchPage({ params: {term}, searchParams: { page } }: Props) {
  if (!term) notFound()

  const termToUse = decodeURI(term)
  const currentPage = parseInt(page) || 1

  const searchResults = await getSearchedMovies(termToUse, currentPage)
  const { results: movies, total_pages: totalPages } = searchResults;

  const popularMovies = await getPopularMovies()

  const searchParamsObj = { page: currentPage.toString() }

  return (
    <div className='max-w-7xl mx-auto'>
     <div className='flex flex-col space-y-4 mt-4 xl:mt-42'>
      <h1 className='text-white text-2xl font-bold px-5 lg:px-10 py-5'>Results for {termToUse}</h1>
      {movies.length === 0 ? <p className='text-white font-bold px-5 lg:px-10 py-5'>No results found</p> :
       <MoviesCarousel movies={movies} title='Movies' isVertical />}
      <Paginations totalPages={totalPages} currentPage={currentPage} searchParamsObj={searchParamsObj} />
      <MoviesCarousel movies={popularMovies} title='You may also like' />
     </div>
    </div>
  )
}