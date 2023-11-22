import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import HeroImg1 from "../components/Hero1/HeroImg1";
import AboutCon from "../components/AboutCon.js/AboutCon";
const About = () => {
    return <div>
        <Navbar />
        <HeroImg1 heading="ABOUT." text="Im a Special Grade Sorcerer." />
        <AboutCon />
        <Footer />
    </div>
}
export default About;