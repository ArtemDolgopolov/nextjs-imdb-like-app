'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButton() {
 const { data: session } = useSession()

 if (session) {
  return (
      <div className='relative z-[1000] flex gap-2 items-center'>
        <p className='text-white text-sm'>{session?.user?.name}</p> <br />
        <button className='text-white bg-primary p-4 rounded-md' onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }
  return (
   <>
     <p className='text-white text-2xl'>Please, sign in</p><br />
     <button className='text-black bg-yellow-400 px-4 py-2 rounded-md' onClick={() => signIn()}>Sign in</button>
   </>
  )
}