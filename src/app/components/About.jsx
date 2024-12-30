"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'

function About() {

    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul className="list-disc pl-2">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>Sequelize</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            ),
        },
        {
            title: "Education",
            id: "education",
            content: (
                <ul className="list-disc pl-2">
                    <li>Fullstack Academy of Code</li>
                    <li>University of California, Santa Cruz</li>
                </ul>
            ),
        },
        {
            title: "Certifications",
            id: "certifications",
            content: (
                <ul className="list-disc pl-2">
                    <li>AWS Cloud Practitioner</li>
                    <li>Google Professional Cloud Developer</li>
                </ul>
            ),
        },
    ];

    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handelTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    const Skills = (tab == "Skills") ? "border-b border-purple-500 text-white" : "text-[#ADB7BE]";
    const Education = (tab == "Education") ? "border-b border-purple-500 text-white" : "text-[#ADB7BE]";
    const Certifications = (tab == "Certifications") ? "border-b border-purple-500 text-white" : "text-[#ADB7BE]";

    return (
        <section className='text-white'>
            <div className="md:grid md:grid-cols-2 items-center py-8 gap-8 px-4 xl:px-4 sm:py-16">
                <Image src={"/about.png"} alt={"About Me"} width={500} height={500} />
                <div className='md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4 mt-5'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, amet tempora!
                        Nostrum vel tempora non dignissimos explicabo ipsam tempore, quae quidem,
                        rerum sit ad hic possimus et amet repellendus ducimus totam sunt dolorum necessitatibus
                        accusantium neque? Sapiente officiis voluptatem aut impedit odio. Itaque, neque
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores eum consectetur
                        magni dolore nam eligendi deserunt, fugit illum, quam, nesciunt sunt voluptates.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <button onClick={() => handelTabChange("Skills")} className={`mr-3 font-semibold hover:text-white ${Skills}`}>
                            Skills
                        </button>
                        <button onClick={() => handelTabChange("Education")} className={`mr-3 font-semibold hover:text-white ${Education}`}>
                            Education
                        </button>
                        <button onClick={() => handelTabChange("Certifications")} className={`mr-3 font-semibold hover:text-white ${Certifications}`}>
                            Certifications
                        </button>
                    </div>
                    <div className='mt-4 ml-3 min-h-20'>
                    {
                        TAB_DATA.map(element => {
                            if (element.title === tab) {
                                return <div key={element.id} >{element.content}</div>;
                            }
                            return null;
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
