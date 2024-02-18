import Image from 'next/image'
import React from 'react'

const Solutions = () => {
  return (
    <section className='bg-white flex flex-col  bg-about-bg bg-cover bg-no-repeat p-12'>
      <div className='flex flex-col lg:flex-row justify-center mx-auto max-w-6xl'>
        <Image src={"/img/screens.png"} width={500} height={150} alt="Solutions" className='m-auto' />
        <div className='flex flex-col justify-center my-auto mx-10 lg:text-left text-black mt-3 lg:my-auto'>
          <p className='text-2xl font-extrabold text-center'>
            <strong>Creating adaptable Solutions</strong>
          </p>
          <div className='flex flex-row justify-center flex-wrap gap-4 mt-5'>
            <div className="flex flex-col text-xs bg-white bg-opacity-70 p-5 rounded-md w-full">
              <div className='flex flex-row font-bold items-center gap-x-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11l3 3l8 -8" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                <p className='text-base'>Nice looking design</p>
              </div>
              <p className='text-left'>Bring your brand identity with the most detailed styled adaptations.</p>
            </div>
            <div className="flex flex-col text-xs bg-white bg-opacity-70 p-5 rounded-md w-full">
              <div className='flex flex-row font-bold items-center gap-x-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11l3 3l8 -8" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                <p className='text-base'>Fully Responsive</p>
              </div>
              <p className='text-left'>Ensure your content is perfectly viewed from all devices and for all your visitors</p>
            </div>
            <div className="flex flex-col text-xs bg-white bg-opacity-70 p-5 rounded-md w-full">
              <div className='flex flex-row font-bold items-center gap-x-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11l3 3l8 -8" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                <p className='text-base'>SEO ready</p>
              </div>
              <p className='text-left'>Improve the search engine indexation. Don't lose any opportunity for just a "word"</p>
            </div>
          </div>
        </div>
      </div>
      <div className='cta-bg flex items-center justify-evenly gap-x-8 p-8 mt-8 mx-auto rounded-md text-black max-w-5xl'>
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

    </section >
  )
}

export default Solutions