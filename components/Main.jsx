/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-[#5651e5]'>Brayden</span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm a full-stack web developer based in the Canada. I specialize in building websites and web applications.
                        I have a passion for constructing websites and web applications. I take pride in designing aesthetically pleasing, user-friendly, and highly functional websites that leave a lasting impression.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href='https://www.linkedin.com/in/yeongheonkim/' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </Link>
                        <Link href='https://github.com/YHKimmm' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </Link>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = 'mailto:dudgjs1318@gmail.com'}>
                            <AiOutlineMail />
                        </div>
                        <Link href='https://pdfhost.io/v/V08iornVS_ResumeYeongHeonBraydenKim_2' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
