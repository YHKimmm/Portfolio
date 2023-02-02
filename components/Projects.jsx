/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ProjectItem from './ProjectItem'
import appleMarketImg from '../public/assets/appleMarketHomePg.png'
import workoutImg from '../public/assets/workoutBuddy.png'
import movieAppImg from '../public/assets/movieApp.png'
const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Apple Market'
                        backgroundImg={appleMarketImg}
                        projectUrl='/applemarket' />
                    <ProjectItem
                        title='Workout Buddy'
                        backgroundImg={workoutImg}
                        projectUrl='/workout' />
                    <ProjectItem
                        title='Movie App'
                        backgroundImg={movieAppImg}
                        projectUrl='/movie' />
                </div>
            </div>
        </div>
    )
}

export default Projects
