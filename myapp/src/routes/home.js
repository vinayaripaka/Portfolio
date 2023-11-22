import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/Hero/HeroImg";
import Footer from "../components/footer/footer";
import Work from "../components/Work/Work"
const Home = () => {
    return <div>
        <Navbar />
        <HeroImg />
        <Work />
        <Footer />
    </div>;
};
export default Home;