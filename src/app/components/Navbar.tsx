"use client";

import { Button } from '@/components/ui/button';
import { ToyBrick } from "lucide-react";

import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';

// Główne kategorie: zestawy, figurki, luźne części
const links = [
  { name: 'Zestawy', href: '/Sets' },
  { name: 'Figurki', href: '/Minifigures' },
  { name: 'Części', href: '/Parts' },
  // { name: 'Instrukcje', href: '/Instuctions' },
]

const Navbar = () => {
  const { handleCartClick } = useShoppingCart();
  return (
    <header className='border-b'>
      <div className='flex items-center justify-center mx-auto max-w-3xl px-4'>
        <Link href="/">
          <h3 className='text-3xl font-semibold cursor-pointer duration-200'>
            Lego<span className='text-red-500'>Shop</span>.
          </h3>
        </Link>

        {/* Kategorie */}
        <nav className='hidden gap-12 lg:flex 2xl:ml-16 md:ml-12'>
          {links.map((link, index) => (
            <div key={index}>
              <Link className='text-xl font-semibold text-black transition duration-200 hover:text-red-500' href={link.href}>
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Koszyk - poprawić formatowanie */}
        <div className='flex'>
          <Button variant="mine"
            onClick={() => handleCartClick()}
            className='flex flex-col gap-y-1.5 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-md ml-16'
          >
            <ToyBrick />
            <span className='hidden font-semibold sm:block'>
              Koszyk
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
};

export default Navbar