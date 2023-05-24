import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-primary text-white md:px-12 md:py-6 px-6 py-3 flex items-center justify-between gap-6'>
        <Link className='text-2xl font-bold ' href="/">Valorant Wiki</Link>
        <nav className='flex items-center gap-4 '>
            <Link className='text-golden font-bold' href="/">Home</Link>
            <Link  href="/">Weapons?</Link>
        </nav>
    </div>
  )
}

export default Header