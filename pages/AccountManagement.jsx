/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import accountManagementImg from '../public/assets/accountmanagement/bank-account-management.PNG'

const AccountManagement = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                    <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                    <Image className='absolute z-1 object-cover' src={accountManagementImg} fill alt='/' />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                        <h2 className='py-2'>Bank Account Management</h2>
                        <h3>ASP.NET CORE MVC</h3>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                    <div className='col-span-4'>
                        <h2>Overview</h2>
                        <p className='mt-4'>
                            This Bank Account Management app is a ASP.NET Core MVC project. It is a comprehensive solution for managing bank accounts. It allows users to create an account with a choice of different bank account types like savings, chequing, RESP, etc.<br /> The application also allows them to edit, delete, and view their bank accounts with the option to sort, search account type, and paginate the list. The database is managed using Microsoft SQL Server, and the application uses sessions to track the client's ID and name. This CRUD-based application offers robust and scalable functionality for managing bank accounts.<br />
                            I also implemented the reCAPTCHA to prevent creating accounts from bots.
                        </p>
                        <p className='mt-4'>
                            This project was built using ASP.NET Core MVC, C#, and Microsoft SQL Server, and it is deployed on Azure.
                        </p>
                        <h3 className='pt-4 text-lg'>Why I built it</h3>
                        <p className='mt-4'>
                            I built this app to learn how to use ASP.NET Core MVC and Microsoft SQL Server. I also wanted to learn how to use sessions to track the client's ID and name.
                        </p>
                        <h3 className='pt-4 text-lg'>Challenges</h3>
                        <p className='mt-4'>
                            The biggest challenge I faced was learning how to use sessions to track the client's ID and name. I also had to implement the session to verify the user's login status in order to access the account management page.
                        </p>

                        <Link href='https://bankaccountmanagement.azurewebsites.net/' target='_blank'>
                            <button className='px-8 py-2 mt-4 mr-8'>
                                Demo
                            </button>
                        </Link>

                        <Link href='https://github.com/YHKimmm/BankAccount-Management-App' target='_blank'>
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
                                    <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' />
                                        ASP.NET Core MVC
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' />
                                        Microsoft SQL Server
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' />
                                        Razor Pages
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' />
                                        reCAPTCHA
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' />
                                        Bootstrap
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-600 py-2 flex items-center md:pb-8'><RiRadioButtonFill className='pr-1' />
                                        Azure
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href='/#projects' scroll={false}>
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AccountManagement
