export type Movie = {
 adult: boolean;
 backdrop_path: string;
 genre_ids: number[];
 id: number;
 origin_country: string[];
 original_language: string;
 original_title: string;
 overview: string;
 popularity: number;
 poster_path?: string;
 release_date: string;
 title: string;
 video: boolean;
 vote_average: number;
 vote_count: number;
 spoken_languages: SpokenLanguage[];
 genres: Genre[];
 tagline: string;
 budget: string;
 revenue: string;
 runtime: number;
 production_countries: ProductioCountries[];
 credits: Cast;
 }
 
 export type SearchResults = {
 page: number;
 results: Movie[];
 total_pages: number;
 total_results: number;
 }

 export type MovieDetails = {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
};
 
 export type Genre = {
 id: number;
 name: string;
 }
 
 export type Genres = {
  genres: Genre[];
 }

 export type SpokenLanguage = {
  name: string;
 };

 export type ProductioCountries = {
  name: string
 }

 export type Cast = {
  cast: CastMembers[]
 }

 export type CastMembers = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
 }

 export type FormDatas = {
  email?: string;
  password?: string;
  general?: string;
 }