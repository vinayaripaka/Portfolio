import "./footer.css"
import React from "react"
import { FaTwitter, FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>22-222-222 Sorcer Society.</p>
                            <p>Kyoto HighSchool.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            939XXXXX56</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            GojoSatoru@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the Company</h4>
                    <p>This is me Gojo Satoru.I am strongest sorcerer in World of jujutsu kaisen. I enjoy Fighting Demon God Sukuna.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer