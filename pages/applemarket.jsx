import React from 'react'
import Image from 'next/image'
import appleMarketImg from '../public/assets/appleMarketHomePg.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const appleMarket = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-cover' layout='fill' src={appleMarketImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Apple Market</h2>
                    <h3>React JS, Node JS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This app was built using React JS and is hosted on Firebase. Users
                        are able to search properties based on an Address, City, or ZIP code
                        to retrieve a list of active properties currently for sale. You will
                        be able to view property information as well as the specific
                        location of the property integrated with the Google Maps API. User
                        authentication is available so you can signup and signin to your
                        account with an email address in order to save your favorite
                        properties. This is made possible with Zillow API
                    </p>
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    <button className='px-8 py-2 mt-4'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Node</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Javascript</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Context API</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Context API</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Context API</p>
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

export default appleMarket
