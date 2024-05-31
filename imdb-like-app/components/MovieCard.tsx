import { Movie } from "@/utils/types"
import Image from "next/image"
import { getImagePath } from "@/utils/getImagePath"

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
   <div className='relative'>
    <p className='absolute z-20 bottom-5 left-5 text-white'>{movie.title}</p>
   <Image
     className='w-fit lg:min-w-[400px] h-50 object-cover object-center rounded
     shadow-md shadow-gray-700 drop-shadow-xl' 
     src={getImagePath(movie.backdrop_path || movie.poster_path)}
     alt={movie.title}
     key={movie.id}
     width={1920}
     height={1080}
   />
   </div>
  )
}