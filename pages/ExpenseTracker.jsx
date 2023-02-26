import React from 'react'
import Image from 'next/image'
import ExpenseListImg from '../public/assets/projects/expense-tracker-expense-list.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const AppleMarket = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-cover' src={ExpenseListImg} alt='/' fill />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Expense Tracker</h2>
                    <h3>Redux JS, ASP.NET Core Web API</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='pt-4'>
                        This web application enables users to easily track their expenses by providing features for adding, editing, and deleting expenses, as well as visualizing expense data in a chart.
                    </p>
                    <p className='pt-4'>
                        The application was developed using a combination of ASP.NET Core Web API and Redux JS, with data stored in an MSSQL database. The finished product was deployed to Azure for seamless access.
                    </p>
                    <h3 className='pt-4 text-lg'>Why I built it</h3>
                    <p className='pt-4'>
                        Built this project to further develop my skills in ASP.NET Core Web API and Redux JS, while also creating a tool that I could use to manage my own expenses. By creating a functional application that addresses a real-world need, I was able to solidify my understanding of these technologies and gain practical experience
                    </p>
                    <h3 className='pt-4 text-lg'>What I learned</h3>
                    <p className='pt-4'>
                        During the development of this application, I acquired valuable experience in constructing a web application using ASP.NET Core Web API and Redux JS. Furthermore, I gained knowledge on deploying a web application on Azure, encompassing the frontend, backend, and database. This experience provided me with a deeper comprehension of cloud computing and its potential benefits for software development projects.
                    </p>

                    <Link href='https://expensefrontend.azurewebsites.net/' target='_blank'>
                        <button className='px-8 py-2 mt-4 mr-8'>
                            Demo
                        </button>
                    </Link>

                    <div className='flex items-center'>
                        <Link href='https://github.com/YHKimmm/expense-app-client' target='_blank'>
                            <button className='px-5 py-2 mt-4 mr-3 bg-gradient-to-r from-[#9f9ddf] to-[#709dff]'>
                                Client Code
                            </button>
                        </Link>
                        <Link href='https://github.com/YHKimmm/expense-app-server' target='_blank'>
                            <button className='px-5 py-2 mt-4 mr-3 bg-gradient-to-r from-[#709dff] to-[#9f9ddf]'>
                                Server Code
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 text-sm md:text-base'>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Redux.js</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> ASP.NET 6</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> MSSQL</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Chartjs</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Google Auth</p>
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
