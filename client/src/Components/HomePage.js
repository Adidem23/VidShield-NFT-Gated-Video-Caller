import React from 'react'
import Navbar from '../Components/Navbar';
import HeroSection2 from './HeroSection2';
import HeroSection from './HeroSection';
import HeroSection3 from './HeroSection3';
import Footer from './Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <HeroSection2 />
            <HeroSection3 />
            <Footer />
        </>
    )
}

export default HomePage