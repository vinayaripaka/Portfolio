import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import HeroImg1 from "../components/Hero1/HeroImg1";
import Card from "../components/Card/Card";
import Work from "../components/Work/Work";
const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg1 heading="PROJECTS." text="Some of my most recent fights" />
            <Work />
            <Card />
            <Footer />
        </div>
    )
}
export default Project;