import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-3 text-center text-sm sm:text-xs max-w-5xl mx-12 lg:mx-auto py-4'>
        <div className='sm:text-left '>
          <p className='border-b border-b-white-400 dark:text-silver-500 w-full sm:w-fit mx-auto sm:mx-0 mb-2'>Get in touch</p>
          <ul className='text-silver-300'>
            <li>Lisbon, Portugal</li>
            <li><strong>(+351) 930 669 714</strong></li>
            <li>schsistemas@gmail.com</li>
          </ul>
          <ul className='flex justify-center sm:justify-start gap-2 mt-5 text-lg'>
            <li className='hover:text-gunmetal-600 transition duration-300'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" fill="currentColor" /></svg>
              </a>
            </li>
            <li className='hover:text-gunmetal-600 transition duration-300'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m12.71 6.33c.48-.4 1.04-.88 1.29-1.41c-.41.21-.9.34-1.44.41c.5-.36.91-.83 1.12-1.47c-.52.28-1.05.52-1.71.64c-1.55-1.87-5.26-.35-4.6 2.45c-2.61-.16-4.2-1.34-5.52-2.79c-.75 1.22-.1 3.07.79 3.58c-.46-.03-.81-.17-1.14-.33c.04 1.54.89 2.28 2.08 2.68c-.36.07-.76.09-1.14.03c.37 1.07 1.14 1.74 2.46 1.88c-.9.76-2.56 1.29-3.9 1.08c1.15.73 2.46 1.31 4.28 1.23c4.41-.2 7.36-3.36 7.43-7.98z" fill="currentColor" /></svg>
              </a>
            </li>
            <li className='hover:text-gunmetal-600 transition duration-300'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" /></svg>
              </a>
            </li>
            <li className='hover:text-gunmetal-600 transition duration-300'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z" /></svg>
              </a>
            </li>
            <li className='hover:text-gunmetal-600 transition duration-300'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" /></svg>
              </a>
            </li>
            <li className='hover:text-gunmetal-600 transition duration-300'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z" /></svg>
              </a>
            </li>
          </ul>
        </div>
        <div className='sm:text-left sm:ml-4'>
          <p className='border-b border-b-white-400 dark:text-silver-500 w-full sm:w-fit mx-auto sm:mx-0 mb-2 mt-6 sm:mt-0'>Sitemap</p>
          <ul className="space-y-1 text-silver-300">
            <li className="menu-link-footer">
              <a href="/">Home</a></li>
            <li className="menu-link-footer">
              <a href="/about">About Us</a></li>
            <li className="menu-link-footer">
              <a href="#services">Services</a></li>
            <li className="menu-link-footer">
              <a href="#projects">Projects</a></li>
            <li className="menu-link-footer">
              <a href="/blog">Blog</a></li>
            <li className="menu-link-footer">
              <a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='border-b border-b-white-400 dark:text-silver-500 w-full sm:w-fit mx-auto sm:mx-0 mb-3 mt-6 sm:mt-0'>Receive the latest news!</p>
          <form action="" method="post">
            <div className='flex flex-col space-y-3 max-w-sm mx-auto sm:mx-0 justify-end'>
              <input type="text" name="name" id="name" placeholder="john doe" className='bg-platinum-500 text-center sm:text-left dark:text-platinum-100 p-2 rounded-sm mx-auto sm:mx-0' />
              <input type="text" name="email" id="email" placeholder="john@business.com" className='bg-platinum-500 text-center sm:text-left dark:text-platinum-100 p-2 rounded-sm mx-auto sm:mx-0' />
              <input type="submit" value="subscribe" className='bg-blue-500 text-white font-bold hover:bg-gunmetal-600 dark:hover:text-white px-4 py-2 rounded w-fit mx-auto sm:mx-0 sm:ml-auto transition duration-300' />
            </div>
          </form>
        </div>
      </div >
      <div className='text-[10px] text-center my-2 mx-auto py-4 border-t-white-400 border-t md:max-w-5xl'>
        <strong>&copy;2023 SCH Sistemas</strong> - All rights reserved <br />
        <a href="#">Terms & Conditions</a> - <a href="">Privacy Policy</a>
      </div>
    </>
  )
}

export default Footer