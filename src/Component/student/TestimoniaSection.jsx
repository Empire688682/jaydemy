import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimoniaSection = () => {
    return (
        <div className='pb-14 px-8 md:px-0'>
            <h2 className='text-3xl font-medium text-gray-800'>Testimonias</h2>
            <p className='md:text-base text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae, nostrum dolor eaque accusantium voluptates amet modi deleniti ullam! Expedita.</p>
            <div className='grid grid-cols-auto gap-8 mt-14'>
                {dummyTestimonial.map((testimonia, i) => (
                    <div key={i} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15_0px] shadow-black/5 overflow-hidden'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/20'>
                                <img className='h-12 w-12 rounded-full' src={testimonia.image} alt={testimonia.name} />
                                <div className='flex flex-col'>
                                    <h1 className=' text-lg font-medium text-gray-800'>{testimonia.name}</h1>
                                    <p className='text-gray-800/80'>{testimonia.role}</p>
                                </div>
                            </div>
                            <div className='pt-5 pb-7 flex flex-col gap-2 px-5'>
                                <div className='flex gap-0.5'>
                                    {
                                        Array.from({ length: 5 }).map((_, i) => (
                                            <img className='h-5' key={i} src={i < Math.floor(testimonia.rating) ? assets.star : assets.star_blank} alt="Star" />
                                        ))
                                    }
                                </div>
                                <p className='text-gray-500'>{testimonia.feedback}</p>
                            </div>
                            <p className='text-black mx-5 border border-gray-500/10 px-5 py-2 w-28 cursor-pointer hover:bg-gray-50'>Read More</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TestimoniaSection
