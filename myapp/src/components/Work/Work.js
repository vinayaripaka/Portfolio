import React from "react";
import CardDyn from "../CardDyn/CardDyn";
import ProjectCardData from "./WorkData";
const Work = () => {
    return <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectCardData.map((val, ind) => {
                return (
                    <CardDyn
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                    />
                )
            })}
        </div>
    </div>
};
export default Work;