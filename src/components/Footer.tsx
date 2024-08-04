import React from 'react'

function Footer() {
    return (
        <div className='h-[20rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 '>
            <div className='max-sm:border-b max-sm:border-neutral-500 p-1'>
                <div className='mb-3 mt-2'>
                    <h2 className='font-semibold text-xl'>About Us</h2>
                </div>
                <div className='w-[10rem]'>
                    <p className='text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ullam? Vero, eos nemo. Veniam eligendi, reprehenderit ipsa cum veritatis sequi!</p>
                </div>
            </div>
            <div className='max-sm:border-b max-sm:border-neutral-500 p-1'>
                <div className='mb-3 mt-2'>
                    <h2 className='font-semibold text-xl'>Quick Links</h2>
                </div>
                <div>
                    <p className='text-gray-300'>Home</p>
                    <p className='text-gray-300'>About</p>
                    <p className='text-gray-300'>Courses</p>
                    <p className='text-gray-300'>Contact</p>
                </div>
            </div>
            <div className='max-sm:border-b max-sm:border-neutral-500 p-1'>
                <div className='mb-3 mt-2'>
                    <h2 className='font-semibold text-xl'>Follow Us</h2>
                </div>
                <div className='text-gray-300 flex space-x-2'>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                </div>
            </div>
            <div className='max-sm:border-b max-sm:border-neutral-500 p-1'>
                <div className='mb-3 mt-2'>
                    <h2 className='font-semibold text-xl'>Contact Us</h2>
                </div>
                <div className='w-[10rem]'>
                    <p className='text-gray-300'>
                        New Delhi, India <br></br>
                        Delhi 100001 <br></br>
                        Email: info@musicschool.com <br></br>
                        Phone: (123) 456-7890
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
