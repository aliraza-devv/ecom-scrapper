import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const navIcons = [
    {src: '/assets/icons/search.svg', alt: 'Search'},
    {src: '/assets/icons/black-heart.svg', alt: 'Heart'},
    {src: '/assets/icons/user.svg', alt: 'User'},
]

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href='/' className='flex items-center gap-1'>
                <Image 
                    src='/assets/icons/logo.svg'
                    width={27}
                    height={27}
                    alt='Ecom scrapper Logo'
                />
                <p className='nav-logo'>
                    Ecom <span className='text-primary'>Scrapper</span>
                </p>
            </Link>
            <div className='flex items-center gap-5'>
                {navIcons.map((icon) => (
                    <Image 
                        key={icon.alt}
                        src={icon.src}
                        alt={icon.alt}
                        width={28}
                        height={28}
                        className='object-contain'
                    />
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar