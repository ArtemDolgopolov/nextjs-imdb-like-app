import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/utils/getMovies'
import MoviesCarousel from '@/components/MoviesCarousel'
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper'

export default async function Home() {
  const upcomningMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (
   <>
     <CarouselBannerWrapper />
     <MoviesCarousel movies={upcomningMovies} title='Upcoming' />
     <MoviesCarousel movies={topRatedMovies} title='Top Rated' />
     <MoviesCarousel movies={popularMovies} title='Popular' />
   </>
  )
}
