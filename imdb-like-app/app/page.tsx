import SideNav from '@/components/sidenav'
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/utils/getMovies'
import MoviesCarousel from '@/components/MoviesCarousel'
import SearchInput from '@/components/SearchInput'
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper'

export default async function Home() {
  const upcomningMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (
   <>
   <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-none md:w-64">
     <SideNav />
    </div>
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
     <SearchInput />
     <CarouselBannerWrapper />
     <MoviesCarousel movies={upcomningMovies} title='Upcoming' />
     <MoviesCarousel movies={topRatedMovies} title='Top Rated' />
     <MoviesCarousel movies={popularMovies} title='Popular' />
     </div>
   </div>
   </>
  )
}
