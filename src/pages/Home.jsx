import React from 'react'
import Footer from '../components/Footer'
import FooterHero from '../components/FooterHero'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeContent />
      <FooterHero />
      <Footer />
    </div>
  )
}

export default Home
