import { Genres } from '@/utils/types'
import Link from 'next/link'

export default async function SideNav() {
 const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

 const options: RequestInit = {
  method: 'GET',
  headers: {
   accept: 'application/json',
   Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
  next: {
   revalidate: 60 * 60 * 24,
  }
 };

 const response = await fetch(url, options)
 const data = (await response.json()) as Genres
 console.log(data.genres)

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-yellow-400 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-black md:w-40">
          MyMDB
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-zinc-950 md:flex flex-col">
         {data.genres.map(genre => (
           <Link className='text-white text-sm pl-3 py-1' key={genre.id} href={`/genre/${genre.id}?genre=${genre.name}`}>
            {genre.name}
           </Link>
         ))}
        </div>
      </div>
    </div>
  );
}