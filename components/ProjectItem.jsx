import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProjectItem = ({ title, backgroundImg, projectUrl, stacks, duration, deployment }) => {
  return (
    <div >
      <div className='relative text-white flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[rgb(175,191,224)]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
          <p className='pt-2 text-white text-center'>{stacks}</p>
          <p className='text-white text-center font-semibold'>{duration}</p>
          <p className='pb-4  text-red-200 text-center font-semibold'>{deployment}</p>
          <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
      </div>
      <p className='font-bold mt-3  text-[#5651e5] text-sm text-center'>💻{stacks}💻</p>
    </div>
  )
}

export default ProjectItem
