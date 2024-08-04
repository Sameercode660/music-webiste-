'use client'

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

function UpcomingVebinar() {

    const featuredWebinars = [
        {
            title: "Mastering the Basics of Music Theory",
            description: "Join our expert instructors as they break down the fundamental concepts of music theory. This webinar will cover scales, chords, and basic harmony to give you a solid foundation in music.",
            slug: "mastering-basics-music-theory"
        },
        {
            title: "Advanced Guitar Techniques",
            description: "Elevate your guitar skills with this advanced webinar. Learn intricate fingerpicking patterns, soloing techniques, and the art of improvisation from renowned guitarists.",
            slug: "advanced-guitar-techniques"
        },
        {
            title: "Vocal Performance and Techniques",
            description: "Discover the secrets to powerful vocal performances. This webinar covers vocal warm-ups, breathing techniques, and how to maintain vocal health for aspiring singers.",
            slug: "vocal-performance-techniques"
        },
        {
            title: "Music Production with Digital Audio Workstations",
            description: "Unlock the potential of digital audio workstations (DAWs) in this comprehensive webinar. Learn how to record, edit, and produce music using industry-standard software.",
            slug: "music-production-daws"
        },
        {
            title: "Songwriting and Composition",
            description: "Dive into the world of songwriting and composition. This webinar explores the creative process, from brainstorming ideas to structuring songs and writing lyrics that resonate.",
            slug: "songwriting-composition"
        },
        {
            title: "Jazz Improvisation Essentials",
            description: "Enhance your improvisational skills in this jazz-focused webinar. Learn the basics of jazz harmony, chord progressions, and techniques for creating spontaneous and expressive solos.",
            slug: "jazz-improvisation-essentials"
        }
    ];
    

  return (
    <div className='p-12 bg-gray-900'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className='text-center'>
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBNARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white'>Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect
                items={featuredWebinars.map(webinar => ({
                    title: webinar.title,
                    description: webinar.description,
                    link: webinar.slug
                }))}
                ></HoverEffect>
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/'}
                className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'
                >
                    View All webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingVebinar
