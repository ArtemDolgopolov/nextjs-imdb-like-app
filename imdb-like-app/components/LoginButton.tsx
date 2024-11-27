import { signIn } from 'next-auth/react'

export default function LoginButton() {
  const handleLogin = async () => {
   await signIn('credentials', {
    email: 'email',
    password: 'password',
    callbackUrl: '/'
   })
  }

  return (
    <button onClick={handleLogin} className='text-white'>
      Log In
    </button>
  )
}