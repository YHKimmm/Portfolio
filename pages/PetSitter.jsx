import React from 'react'
import Image from 'next/image'
import PetSitterImg from '../public/assets/projects/pet-sitter.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const WorkoutBuddy = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1 object-cover' src={PetSitterImg} alt='/' fill />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Pet Sitter</h2>
                    <h3>ASP.NET Core MVC / Entity Framework</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <h2>Overview</h2>
                    <p className='mt-4'>
                        PetSitter is a web application that facilitates the scheduling of pet sitting services through role-based authentication. The platform allows users to register as either customers or sitters. Customers can conveniently book pet sitting services, while sitters can view their scheduled bookings.                    </p>
                    <div className='mt-4'>
                        <h3 className='pt-4 text-lg'>Features</h3>
                        <ul className='list-disc list-inside'>
                            <li className='my-2 cursor-default'>User Registration: The platform allows for registration of both customers and sitters. During registration, users are required to provide personal details such as first name, last name, email, phone number, city, postal code, street address, and account type (either customer or sitter) for both customer and sitter registration.</li>
                            <li className='my-2 cursor-default'>Booking System: Customers can easily book a pet sitter service, select the dates with available sitter for the service, and provide additional information about their pets. Sitters can review their scheduled bookings, confirm them, and view customer contact information.</li>
                            <li className='my-2 cursor-default'>Location: Sitters have the ability to see both their own location and the location of the customer on Google Maps.</li>
                            <li className='my-2 cursor-default'>Reviews: Customers can rate and leave reviews for sitters, which can be publicly viewed by other customers. Sitters, in turn, can view their overall rating, as well as individual ratings and comments from customers.</li>
                            <li className='my-2 cursor-default'>Customer Dashboard: Customers have access to a dedicated profile page where they can manage their personal information, view their upcoming bookings, and add, modify or remove pet or pet information.</li>
                            <li className='my-2 cursor-default'>Sitter Dashboard: Sitters can view a dashboard that shows the number of upcoming and completed bookings, as well as the total number of reviews they have received so far. They can also see the customer&apos;s name, booking ID, pet type, start date, and end date.</li>
                            <li className='my-2 cursor-default'>Admin Dashboard: Administrators have access to a dashboard that allows them to view and re-assign user roles, and view the entire list of users along with their information, including user ID, first name, and last name. The dashboard also includes search functionality to find specific users.</li>
                        </ul>
                    </div>
                    <h3 className='pt-4 text-lg'>Why We built it</h3>
                    <p className='mt-4'>
                        We built this app to create a web application that would be useful to people in our community. I have a dog and I know how difficult it can be to find a reliable pet sitter. I hope that this app will help people find a pet sitter that they can trust.
                    </p>
                    <h3 className='pt-4 text-lg'>Challenges</h3>
                    <p className='mt-4'>
                        The biggest challenge was to create a booking system that would allow customers to book a pet sitter service, select the dates with available sitter for the service, and provide additional information about their pets. Sitters can review their scheduled bookings, confirm them, and view customer contact information.
                    </p>

                    <Link href='https://petsitter20230420102802.azurewebsites.net/' target='_blank'>
                        <button className='px-8 py-2 mt-4 mr-8'>
                            Demo
                        </button>
                    </Link>

                    <Link href='https://github.com/YHKimmm/PetSitter' target='_blank'>
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
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1 ' /> ASP.NET Core MVC</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Entity & Identity Framework</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Microsoft SQL Server</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Ajax</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Paypal API</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> reCAPTCHA</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Sendgrid</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' /> Bootstrap</p>
                            </div>
                            <div>
                                <p className='text-gray-600 py-2 flex items-center md:pb-7'><RiRadioButtonFill className='pr-1' />Azure</p>
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
