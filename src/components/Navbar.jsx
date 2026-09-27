"use client"; 

import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className="w-full bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">
          
          <div className="navbar-start">
         
            <Image src={Logo} alt="LogoImage" width={35} height={35} />
            <span className="text-xl font-bold">FITLOG</span>
          </div>
          
     
          <div className="navbar-center hidden lg:flex">
            <div className="flex gap-6 items-center">
          
              <Link 
                href="/" 
                className={`text-sm font-semibold pb-1  ${
                  pathname === '/' 
                    ? 'text-[#ccff00] border-b-2 border-[#ccff00]' 
                    : ''
                }`}
              >
                Workout
              </Link>

         
              <Link 
                href="/my-plan" 
                className={`text-sm font-semibold pb-1  ${
                  pathname === '/my-plan' 
                    ? 'text-[#ccff00] border-b-2 border-[#ccff00]' 
                    : ''
                }`}
              >
                My Plan
              </Link>
            </div>
          </div>
          
          <div className="navbar-end">
            <div className="flex gap-4 items-center">
  <Link href="/my-plan" className="text-sm font-medium text-white flex items-center gap-2 ">
    Plan 
    <span className="bg-[#ccff00] text-black w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs">
      0
    </span>
  </Link>
  
  <Link href="/my-plan" className="text-sm font-medium text-white flex items-center gap-2 ">
    Saved 
    <span className="border border-gray-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs">
      0
    </span>
  </Link>
</div>

          </div>

      </div>
    </div>
  );
};

export default Navbar;
