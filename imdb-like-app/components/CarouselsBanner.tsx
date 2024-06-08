'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Movie } from "@/utils/types"
import Image from 'next/image'
import { getImagePath } from '@/utils/getImagePath'

type Props = {
 movies: Movie[]
}

Autoplay.globalOptions = { delay: 8000 }

function CarouselsBanner({ movies }: { movies: Movie[] }) {
 const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()])
  return (
    <div 
      className='overflow-hidden lg:-mt-40 relative cursor-pointer'
      ref={emblaRef}
    >
     <div className='flex'>
      {movies.map((movie) => (
      <div key={movie.id} className='flex-[0_0_100%] relative text-white'>
       <Image
         key={movie.id}
         src={getImagePath(movie.backdrop_path, true)}
         alt=''
         width={1920}
         height={1080}
       />
       <div className='hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0
        lg:mt-40 bg-transparent z-20 h-full w-full'>
        <h2 className='text-5xl font-bold max-w-xl z-50'>{movie.title}</h2>
        <p className='max-w-xl'>{movie.overview}</p>
       </div>
      </div>
     ))}
     </div>
    </div>
  )
}

export default CarouselsBanner