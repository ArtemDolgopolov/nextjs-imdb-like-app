'use client'

import dynamic from 'next/dynamic'
// import { useEffect } from 'react'
// import axios from 'axios'
// import { getMovies } from '@/redux/slices/moviesSlice'
// import { useDispatch, useSelector, RootState } from '../redux/store'
// import { getLoading } from '@/redux/slices/loadingSlice'
import SideNav from '@/components/sidenav'

// import Image from 'next/image'

const MovieList = dynamic(() => import('@/components/MovieList'), { ssr: false })

export default function Home() {
//  const dispatch = useDispatch()
//  const movies = useSelector((state: RootState) => state.movies)
//  useEffect(() => {
//   const fetchMovies = async () => {
//       try {
//           const response = await axios.get('https://www.omdbapi.com/?apikey=c6d9841&');
//           const data = response.data;
//           dispatch(getMovies(data));
//       } catch (error) {
//           console.error('Error fetching movies:', error);
//       }
//   };

//   fetchMovies();
// }, [dispatch]);
  return (
   <>
   <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-none md:w-64">
     <SideNav />
    </div>
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
     <MovieList />
     </div>
   </div>
   </>
  )
}
