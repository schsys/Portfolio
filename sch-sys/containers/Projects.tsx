import Project from '@/components/Project'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className='flex flex-col justify-center'>
      <div className='cta-bg flex items-center justify-evenly gap-x-5 p-8 mt-8 text-black'>
        <div className='flex-col text-left'>
          <h1 className='text-2xl font-bold uppercase'>What about your next project?</h1>
          <p className='text-sm normal-case'>
            Let's talk about that idea you have in mind... it's FREE!!!
          </p>
        </div>
        <a href="https://calendly.com/schsistemas/reuniao-de-trabalho" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-900 text-white sm:text-sm font-bold rounded-md 
                    px-6 sm:px-4 py-3 sm:py-2 hover:bg-light-blue-900 hover:text-platinum-700 transition duration-300">
            Schedule now!
          </button>
        </a>
      </div>
      {/* <div className='flex flex-col items-center justify-center py-8 bg-silver-700 text-black'>
        <h1 className='text-2xl font-bold uppercase'>Projects</h1>

        <p className='text-black text-sm normal-case'>
          This is what we have done
        </p>
      </div>
      <div className='flex justify-evenly flex-wrap gap-3 pb-4 bg-gradient-to-b from-silver-700 to-black '>
        <Project />
        <Project />
        <Project />
      </div> */}
    </section>
  )
}

export default Projects