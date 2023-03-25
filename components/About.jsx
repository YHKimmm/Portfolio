/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/about.jpg'
import Link from 'next/link'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>I am not your ordinary programmer</p>
                    <p className='py-2 text-gray-600'>
                        I have a particular expertise in constructing front-end user interface applications that are mobile-responsive and capable of communicating with APIs and back-end technologies like ASP.NET and Node.js. I am enthusiastic about acquiring new knowledge and recognize that there can be multiple solutions to a problem.
                    </p>
                    <p className='py-2 text-gray-600'>
                        In 2022, I began my web development and coding journey using various technologies such as HTML, CSS, JavaScript, C#, React.js, Next.js, Node.js, ASP.NET (MVC & Web API), MSSQL, PostgreSQL, MySQL, and MongoDB to create websites. I excel in creating modern and responsive websites, single-page applications (SPAs), and back-end applications, prioritizing seamless user experience and high-quality results. With a keenness for continuous learning and growth, strong problem-solving abilities, and attention to detail, I thrive as a communicator and team player. I'm eager to bring my skills and enthusiasm to a dynamic organization.                    </p>
                    <p className='py-2 text-gray-600'>
                        I have hands-on experience working with various cloud platforms, including AWS, Azure, and other similar services. Additionally, I have successfully deployed web applications on multiple platforms like AWS Amplify, AWS EC2 Instance, Azure, Vercel, Railway, and GitHub Pages as part of my project experience.
                    </p>
                    <Link href='/#projects' scroll={false}>
                        <p className='py-2 text-gray-600 underline cursor-pointer tracking-wider font-semibold'>
                            Check out some of my latest projects
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About
