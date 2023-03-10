import React from 'react'
import Image from 'next/image'

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/html.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/css.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/javascript.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/tailwind.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/react.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/nextjs.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/node.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Node.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/csharp.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C#</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mix-blend-darken'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/asp.net.png'
                                    width={75}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Asp.Net</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mix-blend-multiply'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/mssql.png'
                                    width={100}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MSSQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/firebase.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/mongo.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Mongo</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/aws.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>AWS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/azure.png'
                                    width={100}
                                    height={120}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Azure</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/github.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/assets/skills/git.png'
                                    width={64}
                                    height={64}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Git</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
