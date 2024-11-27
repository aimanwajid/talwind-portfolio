import React from 'react'

const Skills = () => {
  return (
    <div  id ='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>

      <div>
      <h2 className='text-4xl md:text-5xl'>Technology I Work With</h2>
      <p className='text-gray-500 pt-2'>
        I am web developer, specializing in HTML, CSS, Typescript. My experience extends to
        using framework like React and Next.js to create dynamic and user-friendly applications. I am
        also proficient in talwind css for efficient styling and design, with a passion for learning,
        I stay updated on the latest technology to enhance my skills set and contribute effectively to projects. 
      </p>
    </div>

    <div>
    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'></div>
    <div className='space-y-2'>
      <h2  data-aos="zoom-in-up">Typescript</h2>
      <h2  data-aos="zoom-in-up">Python</h2>
      <h2  data-aos="zoom-in-up">React.js</h2>
      <h2  data-aos="zoom-in-up">Next.js</h2>
    </div>
    <div className='space-y-2'>
      <h2  data-aos="zoom-in-up">Talwind css</h2>
      <h2  data-aos="zoom-in-up">CSS</h2>
      <h2  data-aos="zoom-in-up">Node.js</h2>
    </div>

    </div>
    </div>
    </div>
  )
}

export default Skills