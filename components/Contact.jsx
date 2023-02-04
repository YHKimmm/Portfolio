/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Image from 'next/image'
import contactImg from '../public/assets/contact.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link'

const Contact = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send Message");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);


    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (name.length <= 0) {
            tempErrors["name"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            const response = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    name: name,
                    subject: subject,
                    message: message,
                    phoneNumber: phoneNumber,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            console.log(response);
            const { error } = await response.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send Message");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send Message");
        }
        console.log(name, email, subject, message);
    };

    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image className='w-full rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} alt='/' />
                            </div>
                            <div>
                                <h2 className='py-2'>Brayden</h2>
                                <p>Full-Stack Developer</p>
                                <p className='py-4'>I am available for internship or full-time junior positions. Contact me and let's talk</p>
                            </div>
                            <div>
                                <p className='pt-8 uppercase'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <Link href='https://www.linkedin.com/in/yeongheonkim/' target='_blank'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                    </Link>
                                    <Link href='https://github.com/YHKimmm' target='_blank'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaGithub />
                                        </div>
                                    </Link>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => window.location.href = 'mailto:dudgjs1318@gmail.com'}>
                                        <AiOutlineMail />
                                    </div>
                                    <Link href='https://pdfhost.io/v/V08iornVS_ResumeYeongHeonBraydenKim_2' target='_blank'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lgLp-4'>
                        <div className='p-4'>
                            <form onSubmit={handleSubmit}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>
                                            <div className='flex items-center w-full'>
                                                Name<span className='ml-1'><AiFillStar size={12} /></span>
                                            </div>
                                        </label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        {errors.name && <p className='text-red-500'>Please enter your name</p>}
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type="tel"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>
                                        <div className='flex items-center w-full'>
                                            Email<span className='ml-1'><AiFillStar size={12} /></span>
                                        </div>
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <p className='text-red-500'>Please enter your email</p>}
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>
                                        <div className='flex items-center w-full'>
                                            Subject<span className='ml-1'><AiFillStar size={12} /></span>
                                        </div>
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type="text"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                    {errors.subject && <p className='text-red-500'>Please enter your subject</p>}
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>
                                        <div className='flex items-center w-full'>
                                            Message<span className='ml-1'><AiFillStar size={12} /></span>
                                        </div>
                                    </label>
                                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={10} />
                                    {errors.message && <p className='text-red-500'>Please enter your message</p>}
                                </div>
                                <button className='w-full flex items-center justify-center p-4 text-gray-100 mt-4'>
                                    <span>{buttonText}</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        {showSuccessMessage && <p className='text-green-500 p-4 flex justify-center w-full'>Thanks for contacting me! I will be get in touch ASAP!</p>}
                        {showFailureMessage && <p className='text-red-500 flex justify-center w-full p-4'>Something went wrong, please try again!</p>}
                    </div>
                </div>
                <div>
                    <Link href='#home' scroll={false} className='flex justify-center py-12'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
