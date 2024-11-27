import '@/app/globals.css'
import { Inter } from 'next/font/google'
import ServerSideNav from '@/components/sidenavserver'
import SearchInput from '@/components/SearchInput'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            {session && (
              <>
                <div className="w-full flex-none md:w-64 relative">
                  <ServerSideNav />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                  <SearchInput />
                  {children}
                </div>
              </>
            )}
            {!session && (
              <div className="flex flex-col flex-grow items-center justify-center">
                {children}
              </div>
            )}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}