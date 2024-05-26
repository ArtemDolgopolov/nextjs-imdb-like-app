'use client'

import '@/app/globals.css'
import { Inter } from 'next/font/google'
import StoreProvider from './StoreProvider'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient()
 
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
   <StoreProvider>
    <html lang='en'>
     <QueryClientProvider client={queryClient}>
      <body className={inter.className}>{children}</body>
     </QueryClientProvider>
    </html>
   </StoreProvider>
  );
}