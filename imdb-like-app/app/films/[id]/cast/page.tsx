import { getMovieById } from "@/utils/getMovieById"
import { Movie } from "@/utils/types"
import noPhoto from "../../../../public/no-photo.jpg"

type Props = {
  params: {
    id: string
  };
};

export default async function Cast({ params }: Props) {
  const movie: Movie = await getMovieById(params.id)

  return (
    <section>
     <div className="pt-5">
      <div>
      {movie.credits.cast.map((actor) => (
        <div key={actor.id} className="flex pb-4">
          <img
            className="w-24 h-36 object-cover object-center rounded shadow-md shadow-gray-700 drop-shadow-xl"
            src={actor.profile_path ? `https://image.tmdb.org/t/p/original${actor.profile_path}` : noPhoto.src}
            alt={actor.name} 
          />
          <div className="flex flex-col pl-4">
           <p className="text-white text-left">{actor.name}</p>
           <p className="text-muted-foreground text-left text-xs">{actor.character}</p>
          </div>
        </div>
      ))
      }
      </div>
     </div>
    </section>
  );
}