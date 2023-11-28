import ImgSlider from '@/components/carrousel'
import Image from 'next/image'
// import heroBg from ''

const Hero = () => {
  return (
    <section className='h-fit'>
      <div className=''>
        {/* <Image src="/headBG.png" alt='Hero' width='1440' height={787}
          title='Hero Background' className="h-full" /> */}
        <ImgSlider />
      </div>
    </section>
  )
}

export default Hero