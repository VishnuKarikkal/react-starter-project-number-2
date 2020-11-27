import React from 'react'
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar/Index';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <InfoSection/>
            <Services />
            <Footer />
        </div>
    )
}

export default Home
