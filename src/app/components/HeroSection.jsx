"use client"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl font-extrabold'>
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Hello, I'm{" "}
                        </span>
                        <TypeAnimation
                            sequence={[
                                'Tawfeeq',
                                2000,
                                'Web Developer',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at voluptate debitis. Lorem ipsum dolor sit amet.</p>
                    <div>
                        <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600  shadow-lg transition duration-300">Hire Me</button>
                        <button className="px-6 font-semibold mt-5 sm:mt-0 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg transition duration-300">

                            Download CV
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] sm:w-[330px] lg:h-[330px] overflow-hidden relative" >
                        <Image
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/hero.png"
                            alt="hero img"
                            width={180}
                            height={180}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection
