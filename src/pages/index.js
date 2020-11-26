import React from 'react'
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar/Index';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <InfoSection/>
        </div>
    )
}

export default Home
