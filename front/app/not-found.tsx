import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default async function NotFound() {
  // const data = await getSiteData(domain)
  return (
    <div className='min-h-[70vh]'>
      <Navigation />
      <div className='h-full md:mt-20 pb-10 flex flex-col justify-around items-center'>
        <Image
          src={'/img/lost.jpg'}
          alt='sorry, you are lost...'
          width={350}
          height={600}
          className='rounded-lg py-6'
        />
        <h2 className='text-3xl font-bold'>Not Found what you looking for</h2>
        <p>Could not find requested resource</p>
        <p>
          <Link href="/"> &rarr;&nbsp;&nbsp;&nbsp; <strong>return to home</strong> &nbsp;&nbsp;&nbsp;&larr;</Link>
        </p>
      </div>
    </div>
  )
}