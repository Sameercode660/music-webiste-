'use client'
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
  }


function FeaturedCourses() {

    const featuredCourses: Course[] = courseData.courses

    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {
                        featuredCourses.map((course: Course) => (
                            <div key={course.id} className='flex justify-center'>
                                <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                        <p>{course.title}</p>
                                        <p>{course.description}</p>
                                        <Link href={`/courses/${course.slug}`} className='mt-4 px-2 py-1 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                                            Learn More
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/courses"}
                    className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'
                >
                    View All courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses
