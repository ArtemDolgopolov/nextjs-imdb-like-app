import Link from "@/node_modules/next/link";
import { getMovieById } from "@/utils/getMovieById"
import { Movie } from "@/utils/types"

type Props = {
  params: {
    id: string
  };
};

export default async function FilmPage({ params }: Props) {
  const movie: Movie = await getMovieById(params.id)
  console.log(movie.credits.cast)

  return (
    <section className="py-8">
     <p className="bottom-5 left-5 text-white text-center text-2xl">{movie.title}, {movie.release_date ? movie.release_date.slice(0, 4) : 'No data'}</p>
     <div className="flex flex-col pb-7.5 pt-5 pb-5 gap-8 md:flex-row md:items-start md:justify-center">
      <div className="relative mx-auto md:mx-0 md:w-1/2">
      <img
        className="w-auto h-auto object-cover object-center rounded shadow-md shadow-gray-700 drop-shadow-xl"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        width={400}
        height={225}
      />
    </div>
    <div className="flex flex-col gap-y-6 md:w-1/2">
      <p className="text-white">Country: {movie.production_countries.map((country => country.name)).join(', ')}</p>
      <p className="text-white">Language: {movie.spoken_languages[0] ? movie.spoken_languages[0].name : 'No data'}</p>
      <p className="text-white">Runtime: {movie.runtime} minute{movie.runtime > 1 ? 's' : ''}</p>
      <p className="text-white">Genre: {movie.genres.map((genre) => genre.name).join(', ')}</p>
      <p className="text-white">Budget: {movie.budget ? '$' + parseFloat(movie.budget).toLocaleString('en-US') : 'No data'}</p>
      <p className="text-white">Revenue: {movie.revenue ? '$' + parseFloat(movie.revenue).toLocaleString('en-US') : 'No data'}</p>
      <p className="text-white">Rating: {movie.vote_average|| 'No data'}</p>
      <p className="text-white">Tagline: {movie.tagline || 'No data'}</p>
    </div>
     </div>
     <div className="flex-1 h-px bg-white"></div>
     <div className="pt-5">
      <span className="text-white">About:</span>
      <p className="text-white text-left">{movie.overview || 'No overview'}</p>
     </div>
     <div className="flex-1 h-px bg-white"></div>
     <div className="pt-5">
      <span className="text-white">Cast:</span>
      <div>
      {movie.credits.cast.slice(0, 6).map((actor) => (
        <div key={actor.id}>
          <p className="text-white text-left">{actor.name}</p>
        </div>
      ))
      }
      </div>
      <button>
        <Link href={`/films/${movie.id}/cast`}>{movie.credits.cast.length} actors</Link>
      </button>
     </div>
    </section>
  );
}
