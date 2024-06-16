'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Genre } from '@/utils/types'

type SideNavProps = {
  genres: Genre[]
}

export default function SideNav({ genres }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 relative">
      <div className="md:hidden flex justify-between items-center mb-4">
        <Link
          className="flex items-end justify-start rounded-md bg-yellow-400 p-4"
          href="/"
        >
          <div className="text-black">
            MyMDB
          </div>
        </Link>
        {/* Кнопка для открытия/закрытия меню */}
        <button onClick={toggleMenu} className="text-white focus:outline-none z-50">
          <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {/* Логотип MyMDB для больших экранов */}
      <Link
        className="md:flex hidden lg:flex items-end justify-start rounded-md bg-yellow-400 p-4"
        href="/"
      >
        <div className="text-black">
          MyMDB
        </div>
      </Link>
      {/* Затемнение фона при открытом меню */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={closeMenu}></div>
      )}
      {/* Список жанров */}
      <div className={`fixed inset-y-0 right-0 z-50 bg-zinc-950 p-4 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-1/2 md:relative md:transform-none md:translate-x-0 md:w-full`}>
        {/* Кнопка для закрытия меню на маленьких экранах */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none md:hidden">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col space-y-2">
          {/* Список ссылок на жанры */}
          {genres.map(genre => (
            <Link className='text-white text-sm pl-3 py-1' key={genre.id} href={`/genre/${genre.id}?genre=${genre.name}`} onClick={closeMenu}>
              {genre.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}