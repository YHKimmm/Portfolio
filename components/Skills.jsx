import React, { useState } from 'react'
import Image from 'next/image'
import { skills } from '@/data/skills'
import { categories } from '@/data/categories'

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')

    const filteredSkills = selectedCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === selectedCategory)

    return (
        <div id='skills' className='p-2 w-full py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <div className='flex items-center'>
                    <h2 className='py-4 mr-5 text-2xl md:text-4xl'>What I Can Do</h2>
                    <select
                        className='block w-44 bg-transparent mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-lg bg-white text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category.value} value={category.value} className="py-2">
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {filteredSkills.map(skill => (
                        <div key={skill.name} className='p-6 max-h-[118px] shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    {skill.name === "MySQL" || skill.name === 'Docker' ? (
                                        <Image
                                            src={skill.image}
                                            width={80}
                                            height={80}
                                            alt={skill.name}
                                            className='pt-2'
                                        />
                                    ) : (
                                        <Image
                                            src={skill.image}
                                            width={70}
                                            height={70}
                                            alt={skill.name}
                                        />
                                    )}
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    {skill.name === "MySQL" || skill.name === 'Docker' ? (
                                        <h3 className='mt-3 md:mt-5'>{skill.name}</h3>
                                    ) : (
                                        <h3>{skill.name}</h3>
                                    )}
                                    {skill.name === "ASP.NET" && (
                                        <p className='text-xs text-gray-500'>MVC & Web API</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
