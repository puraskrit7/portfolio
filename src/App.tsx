import Backdrop from './components/Backdrop'
import Grain from './components/Grain'
import NavBar from './components/NavBar'
import SectionTracker from './components/SectionTracker'
import IdentityNode from './components/IdentityNode'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <div id="top" className="relative min-h-screen font-body text-ink">
      <ScrollProgress />
      <Grain />
      <Backdrop />
      <NavBar />
      <SectionTracker />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <IdentityNode />

        <div className="mt-24">
          <Experience />
        </div>

        <div className="mt-24 space-y-24 md:mt-32 md:space-y-32">
          <Skills />
          <Education />
        </div>
      </main>

      <Contact />
      <Footer />
    </div>
  )
}

export default App
