import React from 'react'
import Image from 'next/image'
import appleMarketImg from '../public/assets/applemarket/appleMarketHomePg.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const AppleMarket = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-cover' fill src={appleMarketImg} alt='/' priority={true} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Apple Market</h2>
                    <h3>React JS, Node JS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='pt-4'>An online marketplace where users can post and browse used items for sale.
                        Features include item listing with image, price, and seller information, user registration and authentication using Firebase, email verification.</p>
                    <p className='pt-4'>Once logged in, users are able to post comments on items, view their profile page, and edit their profile image.
                        The website also provides sorting capabilities, enabling users to sort items based on their price, newest, and popularity.
                        This project showcases my expertise in web development, specifically in the areas of user authentication and authorization, database management, and front-end development.</p>
                    <h3 className='pt-4 text-lg'>Why I built it</h3>
                    <p className='pt-4'>I built this project to showcase my skills in web development, specifically in the areas of user authentication and authorization, database management, and front-end development.
                        I also wanted to create a website that would be useful to people in my community, and I thought that an online marketplace would be a great idea in terms of selling their used items at reasonable price, share items, and share thoughts with posting comments</p>
                    <h3 className='pt-4 text-lg'>What I learned</h3>
                    <p className='pt-4'>I learned how to use Firebase to implement user authentication and authorization, and I learned how to use MongoDB to manage a database.
                        I also learned how to use React JS and fetching api from backend to create a responsive and interactive front-end.</p>

                    <Link href='http://34.216.78.53/' target='_blank'>
                        <button className='px-8 py-2 mt-4 mr-8'>
                            Demo
                        </button>
                    </Link>

                    <Link href='https://github.com/YHKimmm/Apple-Market' target='_blank'>
                        <button className='px-8 py-2 mt-4'>
                            Code
                        </button>
                    </Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> React</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Node</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Redux</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Firebase</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> CSS Module</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Mongo DB</p>
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
}

export default AppleMarket
