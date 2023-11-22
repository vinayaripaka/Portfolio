import { Link } from "react-router-dom";
import "./AboutCon.css";
import React from "react";
import Gojo1 from "../../assests/wallpaperflare.com_wallpaper (5).jpg"
import Gojo2 from "../../assests/wallpaperflare.com_wallpaper (6).jpg"
const AboutCon = () => {
    return <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Yowai Mo!I'm the strongest to ever live,only person who can defeat Sukuna.</p>
            <Link to="/contact">
                <button className="btn">Contacts</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Gojo1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={Gojo2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
};
export default AboutCon;