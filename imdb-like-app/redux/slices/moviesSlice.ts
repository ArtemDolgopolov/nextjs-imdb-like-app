import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Movie {
 Title: string;
 Year: string;
 Rated: string;
 Released: string;
 Runtime: string;
 Genre: string;
 Director: string;
 Writer: string;
 Actors: string;
 Plot: string;
 Language: string;
 Country: string;
 Awards: string;
 Poster: string;
 Ratings: [{
  Source: string,
  Value: string
 }];
 Metascore: string;
 imdbRating: string;
 imdbVotes: string;
 imdbID: string;
 Type: string;
 DVD: string;
 BoxOffice: string;
 Production: string;
 Website: string;
 Response: string;
}

export const initialState: Movie = {
 Title: '',
 Year: '',
 Rated: '',
 Released: '',
 Runtime: '',
 Genre: '',
 Director: '',
 Writer: '',
 Actors: '',
 Plot: '',
 Language: '',
 Country: '',
 Awards: '',
 Poster: '',
 Ratings: [{
  Source: '',
  Value: ''
 }],
 Metascore: '',
 imdbRating: '',
 imdbVotes: '',
 imdbID: '',
 Type: '',
 DVD: '',
 BoxOffice: '',
 Production: '',
 Website: '',
 Response: '',
};

const moviesSlice = createSlice({
 name: 'movie',
 initialState,
 reducers: {
     getMovies: (state: Movie, action: PayloadAction<Movie>) => {
      state.Title = action.payload.Title
      state.Year = action.payload.Year
      state.Rated = action.payload.Rated
      state.Released = action.payload.Released
      state.Runtime = action.payload.Runtime
      state.Genre = action.payload.Genre
      state.Director = action.payload.Director
      state.Writer = action.payload.Writer
      state.Actors = action.payload.Actors
      state.Plot = action.payload.Plot
      state.Language = action.payload.Language
      state.Country = action.payload.Country
      state.Awards = action.payload.Awards
      state.Poster = action.payload.Poster
      state.Ratings = action.payload.Ratings
      state.Metascore = action.payload.Metascore
      state.imdbRating = action.payload.imdbRating
      state.imdbVotes = action.payload.imdbVotes
      state.imdbID = action.payload.imdbID
      state.Type = action.payload.Type
      state.DVD = action.payload.DVD
      state.BoxOffice = action.payload.BoxOffice
      state.Production = action.payload.Production
      state.Website = action.payload.Website
      state.Response = action.payload.Response
     }
 }
})

export const { getMovies } = moviesSlice.actions
export default moviesSlice.reducer