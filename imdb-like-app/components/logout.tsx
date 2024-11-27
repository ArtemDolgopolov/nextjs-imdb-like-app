'use client'

import { signOut, useSession } from 'next-auth/react'

export default function Logout() {
 const { data: session } = useSession()

  return (
    <div className='relative z-[1] flex gap-2 items-center'>
      <p className='text-white text-sm'>{session?.user?.email}</p>
      <button className='text-white bg-primary p-4 rounded-md' onClick={() => signOut()}>Log Out</button>
    </div>
  )
}