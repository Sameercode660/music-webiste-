'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const data = [
    {
        quote: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.",
        name: "Theodore Roosevelt",
        title: "26th President of the United States"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail. Leave the roads, take the trails. Your path is unique and the beauty of it is that it is your own. Create and blaze your own path, and others will follow where there was once no trail.",
        name: "Ralph Waldo Emerson",
        title: "American Essayist and Philosopher"
    },
    {
        quote: "You cannot swim for new horizons until you have courage to lose sight of the shore. The journey to new and unknown places demands that you take risks and venture into the uncertain. Embrace the unknown and the unexpected, for it is only by venturing into uncharted waters that you will discover new horizons and possibilities.",
        name: "William Faulkner",
        title: "American Writer and Nobel Prize Laureate"
    },
    {
        quote: "Life is what happens to us while we are making other plans. It is in the moments we least expect, the twists and turns, the unplanned detours that we often find our truest experiences and our greatest joys. Embrace the unexpected, for it is often where life truly happens.",
        name: "Allen Saunders",
        title: "American Writer and Cartoonist"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. Stay true to who you are and do not let the world change you. Your authenticity and individuality are your greatest strengths.",
        name: "Ralph Waldo Emerson",
        title: "American Essayist and Philosopher"
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why. The journey to discovering your purpose is one of the most important and fulfilling paths you will ever take. Seek out your why and live a life full of meaning and purpose.",
        name: "Mark Twain",
        title: "American Writer and Humorist"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. Do not let fear hold you back from experiencing life to the fullest. Take risks, embrace adventure, and live without regrets.",
        name: "H. Jackson Brown Jr.",
        title: "American Author"
    },
    {
        quote: "The best way to predict the future is to invent it. Do not wait for the future to come to you; create it with your actions and your choices. Be proactive in shaping your own destiny and the world around you.",
        name: "Alan Kay",
        title: "American Computer Scientist"
    },
    {
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
        name: "Steve Jobs",
        title: "Co-founder of Apple Inc."
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit. Success is not about one-time achievements; it is about consistent actions and habits that build over time. Strive for excellence in all that you do, and make it a part of your daily routine.",
        name: "Aristotle",
        title: "Greek Philosopher"
    }
];


function TestimonialCards() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
        <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear our Harmony: Voices of success</h2>
        <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-6xl'>
                <InfiniteMovingCards
                items={data}
                direction='right'
                speed='slow'
                ></InfiniteMovingCards>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards
