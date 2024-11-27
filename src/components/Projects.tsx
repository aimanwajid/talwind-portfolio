import React from 'react'
import Heading from "./Heading";
import Card from './Card';
const data = [
    {
        id: 0,
        title: "Calculator",
        desc: "A  simple calculator.",
        img: "/project_01.jpg",
        tags: ["HTML", "CSS", "Typescript"],
    },
    {
        id: "1",
        tirle: "Currency converter",
        desc: "A simple HTML and typescript tool for converting currencices with real-time rates.",
        img: "/project_02.jpg",
        tags: ["HTML", "CSS", "Typescript"],
        
    },
    {
       id:"2",
       title: "Todo list",
       desc: "A simple todo list",
       img: "/project_03.jpg",
       tags:["HTML", "CSS", "Typescript"],
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title= 'My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        
        desc={el.desc}
        img={el.img}
        tags={el.tags}

        />))}
        </div>
       
    </div>
  )
}

export default Projects
 