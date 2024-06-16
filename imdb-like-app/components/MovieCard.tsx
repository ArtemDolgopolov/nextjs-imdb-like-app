import { Movie } from "@/utils/types";
import Image from "next/image";
import { getImagePath } from "@/utils/getImagePath";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out mx-4">
      <div className='absolute' />
      <p className="absolute z-20 bottom-5 left-5 text-white">{movie.title}</p>
      <Image
        className="w-full h-auto object-cover object-center rounded shadow-md shadow-gray-700 drop-shadow-xl"
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
        width={400}
        height={225}
        key={movie.id}
      />
    </div>
  );
}