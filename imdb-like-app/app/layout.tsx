import '@/app/globals.css'
import { Inter } from 'next/font/google'
import SideNav from '@/components/sidenav'
import SearchInput from '@/components/SearchInput'
const inter = Inter({ subsets: ['latin'] })
 
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
     <body className={inter.className}>
     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
       <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
       <SearchInput />
       {children}
      </div>
      </div>
      </body>
    </html>
  );
}