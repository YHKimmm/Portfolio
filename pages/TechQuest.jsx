import React from "react";
import Image from 'next/image'
import PageImg from '../public/assets/projects/tech-quest-generator.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const TechQuest = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-cover' src={PageImg} alt='/' fill />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Tech Quest</h2>
                    <h3>Next.JS, Open AI</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='pt-4'>
                        Tech Quest is a web application that generates customizable interview prompts using Next.js and Typescript. The quest is generated using Open AI&apos;s GPT-3 API.
                    </p>
                    <p className='pt-4'>
                        The goal was to develop a platform that could generate interview questions through the use of Open AI, with different question types and programming languages.
                        Furthermore, the aim was to make the web application accessible to a broad range of web developers. As a result, Tech Quest was developed and designed, which generates customizable interview prompts using Open AI&apos;s GPT-3 API.
                    </p>
                    <h3 className='pt-4 text-lg'>Why I built it</h3>
                    <p className='pt-4'>
                        I built this application to help people who are preparing for technical interviews and myself as well. I wanted to create a web application that can generate interview questions using Open AI
                        with various question types, programming languages, and various types of developers.
                    </p>
                    <h3 className='pt-4 text-lg'>What I learned</h3>
                    <p className='pt-4'>
                        Throughout this project, I learned a lot about web development and the power of using APIs to enhance the functionality of an application.
                    </p>
                    <p className='pt-4'>
                        Specifically, I gained experience in using Next.js and Typescript to build a robust and scalable web application.
                        I also learned how to integrate Open AI&apos;s GPT-3 API to generate interview questions and prompts, which allowed me to create a truly unique and valuable tool for technical interview preparation.
                    </p>
                    <p className='pt-4'>
                        Additionally, I gained knowledge in designing and implementing customizable features that provide a more personalized user experience.
                        Overall, this project allowed me to expand my skillset and knowledge in web development, and I look forward to applying these newfound skills in future projects.
                    </p>
                    <Link href='https://techquest-rk1h476hj-devofhockey.vercel.app/' target='_blank'>
                        <button className='px-8 py-2 mt-4 mr-8'>
                            Demo
                        </button>
                    </Link>

                    <Link href='https://github.com/LiamBCIT/TechQuest' target='_blank'>
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
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Open AI</p>
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

export default TechQuest;
