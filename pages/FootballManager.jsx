import React from "react";
import Image from 'next/image'
import HomePageImg from '../public/assets/projects/football-manager-home-page.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const FootballManager = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-cover' src={HomePageImg} alt='/' fill />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Football Manager</h2>
                    <h3>React JS, AWS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='pt-4'>Football manager app is designed for avid football fans who want to manage their own league, team, player, and position. With our app, users can easily create their own team, and manage their player. They can also view major leagues around the world and explore each team and player based on the selected season.</p>
                    <p className='pt-4'>Football Manager&apos;s league, team, and player&apos;s infomration are based on the API-FOOTBALL service to provide the latest data on leagues, teams, and players. Our app provides users with a seamless and user-friendly experience that allows them to easily access the information they need to manage their own football league.</p>
                    <h3 className='pt-4 text-lg'>Why I built it</h3>
                    <p className='pt-4'>
                        I built this app because I am a big fan of football. I wanted to create an app that allows users to manage their own football league, team, player, and position. I also wanted to create an app that provides users with the latest information on leagues, teams, and players.
                    </p>
                    <h3 className='pt-4 text-lg'>What I learned</h3>
                    <p className='pt-4'>
                        During my project building a football manager app, I gained valuable experience working with various AWS services. Specifically, I learned about AWS Cognito, which is a user authentication service that allowed me to easily manage and authenticate users in my app.
                    </p>
                    <p className='pt-4'>
                        I also worked with AWS Lambda functions, which allowed me to execute code in response to various triggers without having to manage servers. In addition, I used AWS API Gateway to create, publish, and manage APIs for my app, which helped me easily handle requests from my front-end application.
                    </p>
                    <p className='pt-4'>
                        Furthermore, I was able to deploy my web app using AWS CLI through Amplify, which provided a streamlined and simple way to manage my app deployment process. Through this process, I learned about the benefits of using a cloud-based deployment platform and how it can help improve the scalability and reliability of my app. Overall, I gained a deep understanding of the architecture of AWS cloud systems, serverless web app, and how they can be used to build and deploy web applications. This knowledge will be useful to me in future projects and as I continue to develop my skills as a software engineer.
                    </p>

                    <Link href='https://master.d13w4989r7v7a9.amplifyapp.com/' target='_blank'>
                        <button className='px-8 py-2 mt-4 mr-8'>
                            Demo
                        </button>
                    </Link>

                    <Link href='https://github.com/YHKimmm/Football-Manager' target='_blank'>
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
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Vite(React)</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> AWS</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Redux</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> CocroachDB</p>
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

export default FootballManager;
