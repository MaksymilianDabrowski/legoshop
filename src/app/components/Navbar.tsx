"use client";

import { Button } from '@/components/ui/button';
import {ToyBrick, icons} from "lucide-react";

import Link from 'next/link';
import {usePathname} from "next/navigation";

// Główne kategorie: zestawy, figurki, luźne części
const links = [
  {name: 'Zestawy', href: '/Sets'},
  {name: 'Figurki', href: '/Minifigures'},
  {name: 'Części', href: '/Parts'},
  {name: 'Polecane', href: '/Popular'}, // dodać 4 kategorie

]

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className='mb-8 border-b'>
      <div className='flex items-center justify-center mx-auto max-w-3xl px-4'>
      <Link href="/">
        <h3 className='text-3xl font-semibold cursor-pointer duration-200'>
          Lego<span className='text-red-500'>Shop.</span>
        </h3>
    </Link>

      {/* Kategorie */}
      <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
        {links.map((link, index) => (
          <div key={index}>
            <Link className='text-xl font-semibold text-black transition duration-200 hover:text-red-500' href={link.href}>
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
      
      {/* Koszyk - poprawić formatowanie */}
      <div className='flex border-r'>
          <Button variant="mine" className='flex flex-col gap-y-1.5 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-md ml-16'>
             Koszyk
            <ToyBrick />
          </Button>
      </div>

      </div>


      
    </header>

)};

export default Navbar