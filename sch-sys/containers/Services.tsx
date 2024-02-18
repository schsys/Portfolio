"use client"
import Image from 'next/image'
import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Layout Design",
      desc: "Based on your project purpose, we create the most unique and creative layout to fit your business requirements.",
      btn: "Choose your plan",
      target: "#prices"
    },
    {
      title: "Development",
      desc: "Do you need a very custom module? or just loojing for customize your existing site? We can handle this.",
      btn: "Contact us",
      target: "https://calendly.com/schsistemas/reuniao-de-trabalho"
    },
    {
      title: "SEO optimization",
      desc: "Keyword research, image optimization, meta data... all you need to be at the top of the search results.",
      btn: "Choose your plan",
      target: "#prices"
    },
    {
      title: "Technical Support",
      desc: "Is your equipment out of maintenance? don't let your business loose money, keep all your devices ready to work.",
      btn: "Contact us",
      target: "https://calendly.com/schsistemas/reuniao-de-trabalho"
    },
    {
      title: "Networks setups",
      desc: "Share all the resources through your office. Secure them to be uptime and don waste your time.",
      btn: "Contact us",
      target: "https://calendly.com/schsistemas/reuniao-de-trabalho"
    },
    {
      title: "Security systems",
      desc: "Ensure you're covered. Secure your home and office with the most updated technology.",
      btn: "Contact us",
      target: "https://calendly.com/schsistemas/reuniao-de-trabalho"
    },
  ]

  const handleMouseOver = (index: number) => {
    const descTitle = document.getElementById("servTitle") ?? document.createElement('h2');
    descTitle.innerText = services[index].title;

    const descDesc = document.getElementById("servDesc") ?? document.createElement('p');
    descDesc.innerText = services[index].desc;

    const descBtn = document.getElementById("servBtn") ?? document.createElement('button');
    descBtn.innerText = services[index].btn;

    const descTarget = document.getElementById("servTarget") ?? document.createElement('a');
    descTarget.setAttribute("href", services[index].target);

  }

  return (
    <section id="services" className='hidden md:block'>
      <div className='flex flex-col items-center justify-center pt-8 pb-4 bg-silver-700 text-black'>
        <h1 className='text-2xl font-bold uppercase'>Services</h1>

        <p className='text-black text-sm normal-case'>
          A great service is astonishing by it&apos;s resources usage optimization
        </p>
      </div>
      <div className='flex flex-col justify-center items-center py-8 bg-services-bg bg-cover bg-no-repeat bg-center text-white'>
        <div className='flex md:flex-row gap-x-16'>
          <Image
            src={'/img/design2.svg'}
            alt='Layout Design'
            title='Layout Design'
            width={60}
            height={60}
            className='my-2 p-3 text-lg hover:bg-black rounded-md hover:bg-opacity-40'
            onMouseOver={() => handleMouseOver(0)}
          />
          <Image
            src={'/img/coding.svg'}
            alt='Development'
            title='Development'
            width={60}
            height={60}
            className='my-2 p-3 text-lg hover:bg-black rounded-md hover:bg-opacity-40'
            onMouseOver={() => handleMouseOver(1)}
          />
          <Image
            src={'/img/check-square.svg'}
            alt='SEO Optimization'
            title='SEO Optimization'
            width={60}
            height={60}
            className='my-2 p-3 text-lg hover:bg-black rounded-md hover:bg-opacity-40'
            onMouseOver={() => handleMouseOver(2)}
          />
        </div>

        <div className=' bg-black bg-opacity-60 rounded-md text-white w-1/2 py-6'>
          <h2 id="servTitle" className="text-2xl font-bold">Layout Design</h2>
          <p id="servDesc" className='p-5'>
            Based on your project purpose, we create the most unique and creative layout to fit your business requirements.</p>
          <a id="servTarget" href="#prices" rel="noopener noreferrer">
            <button id="servBtn" className='border-[1px] border-white rounded-md hover:bg-light-blue-900 hover:border-light-blue-700 duration-300 font-bold py-1 px-3 mt-1'>
              Choose your plan
            </button></a>
        </div>

        <div className='flex md:flex-row gap-x-16'>
          <Image
            src={'/img/devices.svg'}
            alt='Technical Support'
            title='Technical Support'
            width={60}
            height={60}
            className='my-2 p-3 text-lg hover:bg-black rounded-md hover:bg-opacity-40'
            onMouseOver={() => handleMouseOver(3)}
          />
          <Image
            src={'/img/diagram.svg'}
            alt='Network Installations'
            title='Network Installations'
            width={60}
            height={60}
            className='my-2 p-3 text-lg hover:bg-black rounded-md hover:bg-opacity-40'
            onMouseOver={() => handleMouseOver(4)}
          />
          <Image
            src={'/img/camera.svg'}
            alt='Security Systems'
            title='Security Systems'
            width={60}
            height={60}
            className='my-2 p-3 text-lg hover:bg-black rounded-md hover:bg-opacity-40'
            onMouseOver={() => handleMouseOver(5)}
          />
        </div>
      </div>
    </section>
  )
}

export default Services