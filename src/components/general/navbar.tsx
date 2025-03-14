import Image from 'next/image';
import React, { Suspense } from 'react';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import NavbarRightSide from './navbar-right';

const NavBar = async() => {
  return (
    <header className="relative  md:px-5 px-4">
      <nav className="flex justify-between items-center backdrop-blur-md rounded-xl pt-4 shadow-lg relative z-10">
        <Image
          src={'/logo-two.png'}
          alt="Logo"
          width={160}
          height={100}
          className="object-cover drop-shadow-md"
        />
        <Suspense fallback={'loading ...'}>

        <NavbarRightSide/>
        </Suspense>

      
      </nav>
      <div className="absolute top-full left-0 w-full h-[50px] bg-cover bg-center" style={{ backgroundImage: "url('/header-bg.png')" }}></div>
    </header>
  );
}

export default NavBar;