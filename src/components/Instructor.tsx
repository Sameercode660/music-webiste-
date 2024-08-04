'use client'

import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

function Instructor() {

    const instructors = [
        {
          id: 1,
          name: "Emily Johnson",
          designation: "Senior Lecturer",
          image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
        },
        {
          id: 2,
          name: "Sophia Brown",
          designation: "Assistant Professor",
          image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
        },
        {
          id: 3,
          name: "Olivia Davis",
          designation: "Adjunct Faculty",
          image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
        },
        {
          id: 4,
          name: "Isabella Garcia",
          designation: "Professor",
          image: "https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          id: 5,
          name: "Ava Martinez",
          designation: "Lecturer",
          image: "https://images.pexels.com/photos/921646/pexels-photo-921646.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ];
      
      
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
        <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
            <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
            <p className='text-base md;text-lg text-white text-center mb-4'>Discover the talented professionals who will guide your musical journey</p>
            <div className='flex flex-row items-center justify-center mb-10 w-full'>
                <AnimatedTooltip items={instructors}></AnimatedTooltip>
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructor
