/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from 'next/image'
import movieImg from '../public/assets/movieapp/movieApp.PNG'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'


const MovieApp = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-cover' fill src={movieImg} alt='/' priority={true} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Movie App</h2>
                    <h3>React JS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='mt-4'>
                        This Movie App is  a dynamic and user-friendly platform for movie lovers. The app uses the TMDB movie API to provide an extensive database of movies, sorted by popularity, top rated, upcoming and now playing. Users have the ability to search for movies based on title, and view detailed information about each movie, including the overview, release date, rating, and genre.
                    </p>
                    <p className='mt-4'>
                        One of the standout features of the React Movie App is the ability to add movies to a personal "favourites" or "watch later" list. These selections are stored in local storage, ensuring that users can access their favourite or watch later movies even after closing the web app. The addition and removal of movies to these lists is managed using Redux, providing a seamless user experience
                    </p>
                    <h3 className='pt-4 text-lg'>Why I built it</h3>
                    <p className='mt-4'>
                        I built this app to practice my React skills, and to learn how to use Redux. I also wanted to create a project that would be useful to me, and that I would use on a regular basis. I love watching movies, and I often find myself looking for new movies to watch. I wanted to create a platform that would allow me to easily search for movies, and to keep track of movies that I want to watch.
                    </p>
                    <h3 className='pt-4 text-lg'>Challenges</h3>
                    <p className='mt-4'>
                        One of the biggest challenges I faced while building this app was learning how to use Redux. I had never used Redux before, so I had to learn how to use Redux with React Hooks and with local storage, which was a new concept for me.
                    </p>

                    <button className='px-8 py-2 mt-4 mr-8'>
                        <Link href='https://yhkimmm.github.io/movie-app-react/' target='_blank'>Demo</Link>
                    </button>
                    <button className='px-8 py-2 mt-4'>
                        <Link href='https://github.com/YHKimmm/movie-app-react' target='_blank'>Code</Link>
                    </button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 text-sm'>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' /> React</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' /> Redux</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' /> Local Storage</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' /> Open API</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' /> CSS Module</p>
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

export default MovieApp
