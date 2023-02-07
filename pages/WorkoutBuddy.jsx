import React from 'react'
import Image from 'next/image'
import workoutBuddyImg from '../public/assets/workoutbuddy/workoutBuddy.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const WorkoutBuddy = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1 object-cover' fill src={workoutBuddyImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Workout Buddy</h2>
          <h3>React JS / Node JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <p className='mt-4'>
            This app is a CRUD-based application designed to help users plan, track and manage their workout sessions. With this app, users have the ability to create customized workout plans, including the load, reps, and title of each exercise. The intuitive interface makes it easy for users to add, edit, and delete workout information as needed.
          </p>
          <p className='mt-4'>
            In addition to the workout management features, Workout Buddy also includes user authentication and security features. Users can register, login, and logout with ease, and all authentication is handled securely using JWT and a backend node.js middleware. This ensures that user data is protected and only accessible to the user who created it.
          </p>
          <h3 className='pt-4 text-lg'>Why I built it</h3>
          <p className='mt-4'>
            I built this app to help me manage my own workout sessions. I wanted to create a simple, easy-to-use app that would allow me to create and manage my workout sessions. I also wanted to create a user-friendly app that would allow me to share my workout plans with others.
          </p>
          <h3 className='pt-4 text-lg'>Challenges</h3>
          <p className='mt-4'>
            The biggest challenge I faced while building this app was the authentication and security features. I had to learn how to implement JWT and a backend node.js middleware to ensure that user data was protected and only accessible to the user who created it.
          </p>

          <Link href='https://workout-buddy.up.railway.app/' target='_blank'>
            <button className='px-8 py-2 mt-4 mr-8'>
              Demo
            </button>
          </Link>

          <Link href='https://github.com/YHKimmm/MERN-Workout' target='_blank'>
            <button className='px-8 py-2 mt-4'>
              Code
            </button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 text-sm'>
              <div>
                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1 ' /> React</p>
              </div>
              <div>
                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Node</p>
              </div>
              <div>
                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Mongo DB</p>
              </div>
              <div>
                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Context API</p>
              </div>
              <div>
                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> JWT</p>
              </div>
              <div>
                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> CSS Module</p>
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

export default WorkoutBuddy
