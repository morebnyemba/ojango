import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ValueStack from './components/ValueStack'
import Features from './components/Features'
import Stakeholders from './components/Stakeholders'
import BrandEssence from './components/BrandEssence'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ValueStack />
      <Features />
      <Stakeholders />
      <BrandEssence />
      <SocialProof />
      <Footer />
      <BackToTopButton />
    </main>
  )
}