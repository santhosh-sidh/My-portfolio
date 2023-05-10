import React from "react";
import '../Styles/HomePageStyles.css';
import SanthoshPic from '../Media/Images/IMG_9974.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function HomePage()
{
    function DisplayResumeSection()
    {
        var ResumeSection = document.getElementById("ResumeSection");

        ResumeSection.setAttribute("style","display: block");
    }

    return (
        <div id="Home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1 col-lg-3"></div>
                    <div className="col-10 col-lg-6">
                        <div className="row">
                            <div className="col-12 col-lg-5 pageCard">
                                {/* <img src={SanthoshPic} alt="Santhosh" className="col-7 rounded-circle myPic"/> */}
                                <div className="name">
                                    <p id="nameFont">Santhosh</p>
                                </div>
                                <div id="line"></div>
                                <span id="designationTextInsideCard">DEVELOPER</span>
                                <div id="socialForumsIcons">
                                    <FontAwesomeIcon icon={faGithub} id="icons"/>
                                    <FontAwesomeIcon icon={faFacebook} id="icons"/>
                                    <FontAwesomeIcon icon={faLinkedinIn} id="icons"/>
                                    <FontAwesomeIcon icon={faInstagram} id="icons"/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7 px-4 py-5 py-lg-0">
                                <p id="helloText">Hi It's Me,</p>
                                <p id="introText">Santhosh</p>
                                <p id="certifiedText">Certified Full Stack Developer</p>
                                <p id="apjQuotes">Developed a number of software solutions using a variety of coding languages and has practical knowledge of programming languages like HTML,CSS, SQL, Java and JavaScript.</p>
                                <a href="#ResumeSection" id="resumeBtn" className="btn px-4" onClick={DisplayResumeSection}>RESUME</a>
                                <a href="#ProjectsSection" id="projectsBtn" className="btn px-4">PROJECTS</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-lg-3"></div>
                </div>
            </div>
        </div>
    );
}