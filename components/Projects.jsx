import React from 'react'
import ProjectItem from './ProjectItem'
import AppleMarketItemListImg from '../public/assets/projects/apple-market-item-list.jpg'
import WorkOutBuddyImg from '../public/assets/projects/workout-buddy-app.jpg'
import MovieAppImg from '../public/assets/projects/tmdb-movie-app.jpg'
import BankAccountManagementAppImg from '../public/assets/projects/bank-account-management-app.jpg'
import ExpenseTrackerStatisticsImg from '../public/assets/projects/expense-tracker-statistics.jpg'
import FootballManagerImg from '../public/assets/projects/football-manager.png'
import TechQuestImg from '../public/assets/projects/tech-quest.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full md:py-16'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Football Manager'
                        backgroundImg={FootballManagerImg}
                        projectUrl='/FootballManager'
                        stacks='React.js, AWS, CocroachDB'
                        duration='3 weeks'
                        deployment='AWS Amplify'
                    />
                    <ProjectItem
                        title='Apple Market'
                        backgroundImg={AppleMarketItemListImg}
                        projectUrl='/AppleMarket'
                        stacks='React.js, Node.js, Express, MongoDB'
                        duration='2 weeks'
                        deployment='AWS EC2 Instance'
                    />
                    <ProjectItem
                        title='Tech Quest'
                        backgroundImg={TechQuestImg}
                        projectUrl='/TechQuest'
                        stacks='Next.js, Typescript, Open AI'
                        duration='1 day'
                        deployment='Vercel'
                    />
                    <ProjectItem
                        title='Expense Tracker'
                        backgroundImg={ExpenseTrackerStatisticsImg}
                        projectUrl='/ExpenseTracker'
                        stacks='Redux.js(React), ASP.NET Core Web API, MSSQL'
                        duration='2 weeks'
                        deployment='Azure'
                    />
                    <ProjectItem
                        title='Movie App'
                        backgroundImg={MovieAppImg}
                        projectUrl='/MovieApp'
                        stacks='React.js, Redux'
                        duration='1 week'
                        deployment='Github Pages'
                    />
                    <ProjectItem
                        title='Account Manager'
                        backgroundImg={BankAccountManagementAppImg}
                        projectUrl='/AccountManagement'
                        stacks='ASP.NET Core, Entity Framework, MSSQL'
                        duration='2 weeks'
                        deployment='Azure'
                    />
                    <ProjectItem
                        title='Workout Buddy'
                        backgroundImg={WorkOutBuddyImg}
                        projectUrl='/WorkoutBuddy'
                        stacks='React.js, Node.js, Express, MongoDB'
                        duration='1 week'
                        deployment='Railway'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
