import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/utils/getMovies'
import MoviesCarousel from '@/components/MoviesCarousel'
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const upcomningMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  const session = await getServerSession()
  if (!session) {
   redirect('/login')
 }

  return (
   <>
     <CarouselBannerWrapper />
     <MoviesCarousel movies={upcomningMovies} title='Upcoming' />
     <MoviesCarousel movies={topRatedMovies} title='Top Rated' />
     <MoviesCarousel movies={popularMovies} title='Popular' />
   </>
  )
}
