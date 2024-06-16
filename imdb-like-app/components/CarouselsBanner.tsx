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
      className='overflow-hidden relative cursor-pointer mt-4 md:mt-0 lg:-mt-40'
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
       <div className='absolute top-0 left-0 w-full h-full bg-transparent z-20 flex flex-col justify-center items-start p-4 md:p-10'>
        <h2 className='text-lg md:text-2xl lg:text-5xl font-bold max-w-xl'>{movie.title}</h2>
        <p className='hidden md:block max-w-xl'>{movie.overview}</p>
       </div>
      </div>
     ))}
     </div>
    </div>
  )
}

export default CarouselsBanner