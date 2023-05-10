import React from "react";
import '../Styles/Projects.css';
import projectImage from '../Media/Images/cards.png';

export function Projects()
{
    return (
        <div id="Projects">
            <div className="container-fluid">
                <div className="text-center">
                    <h2 id="proTitle">Projects</h2>
                </div>
                <div className="row">
                    <div className="col-1 col-lg-2"></div>
                    <div className="col-10 col-lg-8 text-center">
                        <h3>React Js</h3>
                        <a href="https://app.netlify.com/teams/santhoshtamil0077/overview" rel="noreferrer" target="_blank">
                            <img src={ projectImage } alt="" className="col-10 col-6"/>
                        </a>
                    </div>
                    <div className="col-1 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}