import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Hero from './section/Header'
import ExpertiseSection from './section/SectionExperties'
import WorkSection from './section/SectionSelectedWork'
import BrandsSection from './section/SectionBrand'
import CtaSection from './section/SectionClients'

import './App.css'

/* ─── App ─────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExpertiseSection />
        <WorkSection />
        <BrandsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
