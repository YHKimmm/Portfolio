/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/about.jpg'
const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>
                        I specialize in building mobile responsive front-end UI applications
                        that connect with API's and other backend technologies such as ASP.NET and Node.js. I'm
                        passionate about learning new technologies and understand there is
                        more than one way to accomplish a task. Though I am most proficient
                        in building full-stack applications using HTML, CSS, Javascript, and
                        React, Node.js or ASP.NET I am a quick learner and can pick up new tech stacks as
                        needed. I believe that being a great developer is not using one
                        specific language, but choosing the best tool for the job.
                    </p>
                    <p className='py-2 text-gray-600'>
                        With a passion for web development and coding, I embarked on my journey in 2022,
                        utilizing my skills to create websites with  having strong technical skills in HTML, CSS, JavaScript, React, Next.js, ASP.NET, C#, SQL, and Node.js.
                        Experienced in building modern and responsive websites, single-page applications (SPAs), and back-end applications, with a focus on delivering high-quality results and a seamless user experience.
                        Passionate about continuous learning and growth, with excellent problem-solving skills and attention to detail. A strong communicator and team player,
                        who is eager to bring his skills and enthusiasm to a dynamic organization.
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>
                        Check out some of my latest projects
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About
