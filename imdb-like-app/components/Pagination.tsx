'use client'

import { Button } from './ui/button'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

type Props = {
  totalPages: number;
  currentPage: number;
  searchParamsObj: Record<string, string>
};

export default function Paginations({ totalPages, currentPage, searchParamsObj }: Props) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const [pageNumber, setPageNumber] = useState(currentPage)

  const nextPage = () => {
    if (pageNumber === totalPages) return
    setPageNumber((prevPage) => ++prevPage)
  }

  const prevPage = () => {
    if (pageNumber === 1) return
    setPageNumber((prevPage) => --prevPage)
  }

  useEffect(() => {
    setPageNumber(currentPage)
  }, [currentPage])

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    for (const key in searchParamsObj) {
      params.set(key, searchParamsObj[key])
    }
    params.set('page', pageNumber.toString())
    router.push(`${pathName}?${params.toString()}`)
  }, [pageNumber, router, pathName, searchParamsObj])

  return (
     <div className='flex justify-center'>
       <Button onClick={prevPage}>Prev</Button>
       <p className='text-white p-2'>{pageNumber} of {totalPages}</p>
       <Button onClick={nextPage}>Next</Button>
     </div>
  );
}