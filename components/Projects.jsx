import React from 'react'
import ProjectItem from './ProjectItem'
import appleMarketImg from '../public/assets/applemarket/appleMarketItemPg.PNG'
import workoutImg from '../public/assets/workoutbuddy/workoutBuddy.PNG'
import movieAppImg from '../public/assets/movieapp/movieApp.PNG'
import accountManagementImg from '../public/assets/accountmanagement/bank-account-management.PNG'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Apple Market'
                        backgroundImg={appleMarketImg}
                        projectUrl='/AppleMarket'
                        stacks='React.js, Node.js, Express, MongoDB'
                        duration='2 weeks'
                        deployment='AWS'
                    />
                    <ProjectItem
                        title='Workout Buddy'
                        backgroundImg={workoutImg}
                        projectUrl='/WorkoutBuddy'
                        stacks='React.js, Node.js, Express, MongoDB'
                        duration='1.5 weeks'
                        deployment='Railway'
                    />
                    <ProjectItem
                        title='Movie App'
                        backgroundImg={movieAppImg}
                        projectUrl='/MovieApp'
                        stacks='React.js'
                        duration='1 week'
                        deployment='Github Pages'
                    />
                    <ProjectItem
                        title='Account Management'
                        backgroundImg={accountManagementImg}
                        projectUrl='/AccountManagement'
                        stacks='ASP.NET Core MVC, SQL Server'
                        duration='2 weeks'
                        deployment='Azure'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
