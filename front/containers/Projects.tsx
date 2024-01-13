import Project from '@/components/Project'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className='flex flex-col justify-center'>
      <div className='flex flex-col items-center justify-center py-8 bg-silver-700 text-black'>
        <h1 className='text-2xl font-bold uppercase'>Projects</h1>
        <div className=''>
          <Image
            src={'/img/title-spacer.png'}
            alt='title spacer'
            title='title spacer'
            width={35}
            height={14}
            className='pt-1 pb-2'
          />
        </div>
        <p className='text-black text-sm normal-case'>
          This is what we have done
        </p>
      </div>
      <div className='flex justify-evenly flex-wrap gap-3 pb-4 bg-gradient-to-b from-silver-700 to-black '>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  )
}

export default Projects