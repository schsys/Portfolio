import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section id="services" className='hidden md:block bg-services-bg bg-cover bg-center'>
      <div className='flex flex-col items-center justify-center py-8 bg-silver-700 text-black'>
        <h1 className='text-2xl font-bold uppercase'>Services</h1>
        <div className=''>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M2 11h2v2H2v-2Zm4 0h12v2H6v-2Zm14 0h2v2h-2v-2Z" /></svg> */}
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
          A great service is astonishing by it&apos;s resources usage optimization
        </p>
      </div>
      <div className='flex flex-col justify-center items-center h-96'>
        <div className='flex md:flex-row'>
          <Image
            src={'/img/design2.svg'}
            alt='title spacer'
            title='title spacer'
            width={40}
            height={40}
            className='mx-12 my-6'
          />
          <Image
            src={'/img/coding.svg'}
            alt='title spacer'
            title='title spacer'
            width={40}
            height={40}
            className='mx-12 my-6'
          />
          <Image
            src={'/img/check-square.svg'}
            alt='title spacer'
            title='title spacer'
            width={40}
            height={40}
            className='mx-12 my-6'
          />
        </div>

        <div className=' bg-black bg-opacity-80 rounded-md text-white h-48 w-1/2 py-2'>
          <h2 className="text-lg font-bold pt-2">Services Title</h2>
          <p className='p-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit aperiam voluptatibus nisi illum facilis</p>
          <button className='border-[1px] border-white rounded-md hover:bg-light-blue-900 hover:border-light-blue-700 duration-300 font-bold py-1 px-3 mt-1'>
            Know More
          </button>
        </div>

        <div className='flex md:flex-row'>
          <Image
            src={'/img/devices.svg'}
            alt='title spacer'
            title='title spacer'
            width={40}
            height={40}
            className='mx-12 my-6'
          />
          <Image
            src={'/img/diagram.svg'}
            alt='title spacer'
            title='title spacer'
            width={40}
            height={40}
            className='mx-12 my-6'
          />
          <Image
            src={'/img/camera.svg'}
            alt='title spacer'
            title='title spacer'
            width={40}
            height={40}
            className='mx-12 my-6'
          />
        </div>
      </div>
    </section>
  )
}

export default Services