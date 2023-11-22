import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import HeroImg1 from "../components/Hero1/HeroImg1";
import Form from "../components/Form/Form";
const Contact = () => {
    return <div>
        <Navbar />
        <HeroImg1 heading="CONTACT." text="Contact Me for working on new projects!" />
        <Form />
        <Footer />
    </div>
}
export default Contact;