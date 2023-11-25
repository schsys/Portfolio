import Hero from '@/containers/Hero'
import Projects from '@/containers/Projects'
import Services from '@/containers/Services'
import Solutions from '@/containers/Solutions'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="text-center">
      <Hero />
      <Solutions />
      <Services />
      <Projects />
    </main>
  )
}
