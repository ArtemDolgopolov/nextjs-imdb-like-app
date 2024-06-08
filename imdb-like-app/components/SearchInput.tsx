'use client'

import { useRouter } from "next/navigation"

export default function SearchInput() {
 const router = useRouter()

 return (
   <>
       <div className='py-3 relative z-100 flex justify-end'>
        <input
         className='bg-zinc-900 text-white p-1'
         type='text'
         placeholder='Search movies...'
        />
       <button>
        Search
       </button>
       <button>
        Clear Search
       </button>
       </div>  
   </>
 );
}