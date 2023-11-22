import "./CardDyn.css"
import React from "react";
import pro1 from "../../assests/gojo22.jpg";
import { NavLink } from "react-router-dom";
const CardDyn = (props) => {
    return <div className="project-card">
        <img src={props.imgsrc} alt="image" />
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
        </div>
    </div>
};
export default CardDyn;