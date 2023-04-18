import React from "react";
import Image from 'next/image'
import PageImg from '../public/assets/projects/eco-mute-about.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const EcoMute = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-cover' src={PageImg} alt='/' fill />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Eco Mute</h2>
                    <h3>Next.JS, Google Maps API</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='pt-4'>
                        Eco Mute is a web-based application that helps people reduce carbon footprint on daily commute and raise awareness
                        about the environmental impact of transportation choices.
                    </p>
                    <p className='pt-4'>
                        The application uses Google Maps API to calculate estimated carbon dioxide emissions for daily commutes based on various factors, including distance, transportation mode, and fuel type. Users can enter their starting point and destination, choose their mode of transportation, and view the emissions data to better understand their carbon footprint.
                    </p>
                    <h3 className='pt-4 text-lg'>Why I built it</h3>
                    <p className='pt-4'>
                        I built this application to help people reduce their carbon footprint and become more environmentally conscious.
                        I believe that by providing people with the tools to make more informed decisions, we can collectively make a positive impact on the environment.
                    </p>
                    <h3 className='pt-4 text-lg'>What I learned</h3>
                    <p className='pt-4'>
                        I gained valuable experience with integrating APIs, working with data, and building a full-stack web application. I also learned about the importance of accuracy and transparency when it comes to environmental data.
                    </p>
                    <h3 className='pt-4 text-lg'>Challenges</h3>
                    <p className='pt-4'>
                        The biggest challenge I faced was working with the Google Maps API with specific their types and ensuring that the emissions data was accurate and up-to-date. I also had to work through some issues with the calculations for emissions from walking and biking since these modes of transportation do not use fuel.
                    </p>
                    <Link href='https://eco-mute.vercel.app/' target='_blank'>
                        <button className='px-8 py-2 mt-4 mr-8'>
                            Demo
                        </button>
                    </Link>

                    <Link href='https://github.com/YHKimmm/EcoMute' target='_blank'>
                        <button className='px-8 py-2 mt-4'>
                            Code
                        </button>
                    </Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 text-sm md:text-base'>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Next.js</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Typescript</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Google Maps API</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href='/#projects' scroll={false}>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    )
};

export default EcoMute;
