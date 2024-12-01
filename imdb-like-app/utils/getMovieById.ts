import { Movie } from "./types"

export async function getMovieById(id: string): Promise<Movie> {
 const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);

 const options: RequestInit = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
   }
 };

 const response = await fetch(url.toString(), options);
 if (!response.ok) {
   throw new Error('Failed to fetch movie');
 }

 const data: Movie = await response.json();
 console.log(data)
 return data;
}