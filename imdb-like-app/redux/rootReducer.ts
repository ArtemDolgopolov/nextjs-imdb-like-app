import { combineReducers } from '@reduxjs/toolkit'
import moviesReducer from './slices/moviesSlice'

const rootReducer = combineReducers({
 movies: moviesReducer
})

export default rootReducer