import React from 'react';
import BannerImg from '@/assets/banner.png';
import Image from 'next/image';


const Banner = () => {
    return (
   
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 bg-[#131313] border
         border-gray-800 rounded-3xl p-8 lg:p-16 my-8 w-full">
            

<div className="space-y-6 text-center lg:text-left">

    <span className="text-[#ccff00] text-xs lg:text-sm font-bold  block">
        WORKOUT LIBRARY
    </span>
      <h2 className="text-4xl lg:text-5xl font-black text-white ">
        TRAIN WITH INTENT. <br />LOG EVERY SET.
    </h2>
    

    <p className="text-gray-400 text-sm lg:text-base max-w-md mx-auto lg:mx-0 font-medium">
        FitLog is a dark, no-nonsense gym companion: 
        pick a lift, lock it into today's plan, and watch the week's
        work add up.
    </p>
    
 
    <div className="pt-2">
        <button className="bg-[#ccff00] text-black font-extrabold text-sm px-6 py-3 rounded-md 
       ">
            Browse Workouts
        </button>
    </div>
</div>


            <div className="flex justify-center items-center">
                <Image 
                    src={BannerImg} 
                    alt="BannerImage" 
                    width={450} 
                    height={450} 
                  
                />
            </div>
            
        </div>
    );
};



export default Banner;