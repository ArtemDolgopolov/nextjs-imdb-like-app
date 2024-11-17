import '@/app/globals.css'
import { Inter } from 'next/font/google'
import ServerSideNav from '@/components/sidenavserver'
import SearchInput from '@/components/SearchInput'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import { redirect } from "@/node_modules/next/navigation"
import AuthButton from '@/components/AuthButton'
import Link from '@/node_modules/next/link'

const inter = Inter({ subsets: ['latin'] })

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession()

  return (
   <html lang="en">
    <body className={inter.className}>
      <SessionProvider session={session}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          {session ? (
            <>
              <div className="w-full flex-none md:w-64 relative">
                <ServerSideNav />
              </div>
              <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                <SearchInput />
                {children}
              </div>
            </>
          ) : (
            <>
               <div className="flex flex-col flex-grow items-center justify-center">
                 <Link
                className="items-end justify-start rounded-md bg-yellow-400 p-4 h-[5%] mb-[5em]"
                href="/"
              >
                <div className="text-black">
                  MyMDB
                </div>
               </Link>
                 <AuthButton />
               </div>
             </>
           )}
        </div>
      </SessionProvider>
    </body>
  </html>
)
}