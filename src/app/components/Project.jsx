import React from 'react'
import ProjectCard from './ProjectCard';

function Project() {

    const projectsData = [
        {
            id: 1,
            title: "React Portfolio Website",
            description: "Project 1 description",
            image: "1.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/",
        },
        {
            id: 2,
            title: "Potography Portfolio Website",
            description: "Project 2 description",
            image: "2.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/",
        },
        {
            id: 3,
            title: "E-commerce Application",
            description: "Project 3 description",
            image: "3.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/",
        },
        {
            id: 4,
            title: "Food Ordering Application",
            description: "Project 4 description",
            image: "4.png",
            tag: ["All", "Mobile"],
            gitUrl: "/",
            previewUrl: "/",
        },
        {
            id: 5,
            title: "React Firebase Template",
            description: "Authentication and CRUD operations",
            image: "5.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/",
        }
    ];


    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-bold text-center'>Projects</h1>
            <div className='flex items-center justify-center gap-6 md:gap-20 mt-10'>
                <button className='border-2 border-purple-500 py-4 px-6 rounded-full hover:border-white'>All</button>
                <button className='border-2 border-purple-500 py-4 px-6 rounded-full hover:border-white'>Web</button>
                <button className='border-2 border-purple-500 py-4 px-6 rounded-full hover:border-white'>ML</button>
            </div>
            <div>
            {
                projectsData.map((element) => {
                    return (
                        <ProjectCard 
                            key={element.id} 
                            imgUrl={element.image} 
                            title={element.title} 
                            description={element.description} 
                        />
                    );
                })
            }
            </div>
        </div>
    )
}

export default Project
