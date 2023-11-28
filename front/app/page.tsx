import Navigation from '@/components/Navigation'
import Hero from '@/containers/Hero'
import Projects from '@/containers/Projects'
import Services from '@/containers/Services'
import Solutions from '@/containers/Solutions'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="text-center bg-white-300">
        <Hero />
        <Solutions />
        <Services />
        <Projects />
      </main>
    </>
  )
}
