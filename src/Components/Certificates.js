import React from "react";
import '../Styles/Certificates.css';
import courseraCertificate_1 from '../Media/Certificates/TechFoundation.jpg';
import courseraCertificate_2 from '../Media/Certificates/Coursera CSS.jpg';
import courseraCertificate_3 from '../Media/Certificates/Coursera HTML.jpg';
import courseraCertificate_4 from '../Media/Certificates/COursera JS.jpg';
import courseraCertificate_5 from '../Media/Certificates/Coursera RDBMS.jpg';
import courseraCertificate_6 from '../Media/Certificates/Meta Front-end.jpg';
import courseraCertificate_7 from '../Media/Certificates/Meta Back-end.jpg';
import courseraCertificate_8 from '../Media/Certificates/CRUD.jpg';
import courseraCertificate_9 from '../Media/Certificates/Meta Back-end.jpg';
import courseraCertificate_10 from '../Media/Certificates/CRUD.jpg';

export function Certificates()
{
    return (
        <div id="Certificates">
            <div className="text-center">
                <h3 className="pt-5">Certificates</h3>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="d-none d-lg-flex certificatesPane">
                        <div className="slider">
                            <span style={{"--i":"1"}}><img src={courseraCertificate_1} alt="Coursera-KGiSL-Tech Foundation for SP"/></span>
                            <span style={{"--i":"2"}}><img src={courseraCertificate_2} alt="Coursera-KGiSL-HTML for SP"/></span>
                            <span style={{"--i":"3"}}><img src={courseraCertificate_3} alt="Coursera-KGiSL-CSS Style Sheets for SP"/></span>
                            <span style={{"--i":"4"}}><img src={courseraCertificate_4} alt="Coursera-KGiSL-Basics of JavaScript"/></span>
                            <span style={{"--i":"5"}}><img src={courseraCertificate_5} alt="Coursera-Relational Database Management System"/></span>
                            <span style={{"--i":"6"}}><img src={courseraCertificate_6} alt="Coursera-Meta-Introduction to Front End Development"/></span>
                            <span style={{"--i":"7"}}><img src={courseraCertificate_7} alt="Coursera-Meta-Introduction to Back End Development"/></span>
                            <span style={{"--i":"8"}}><img src={courseraCertificate_8} alt="Coursera-Guided Project-CRUD Operations using MangoDB NoSQL"/></span>
                            <span style={{"--i":"9"}}><img src={courseraCertificate_9} alt="Coursera-Meta-Introduction to Back End Development"/></span>
                            <span style={{"--i":"10"}}><img src={courseraCertificate_10} alt="Coursera-Guided Project-CRUD Operations using MangoDB NoSQL"/></span>
                        </div>                
                    </div>
                    <div className="d-flex d-lg-none">
                        <div className="container-fluid ">
                            <div className="row text-center">
                                <div className="col-6 my-2">
                                    <img src={courseraCertificate_1} className="col-11" alt="Coursera-KGiSL-Tech Foundation for SP"/>
                                </div>
                                <div className="col-6 my-2">
                                    <img src={courseraCertificate_2} className="col-11" alt="Coursera-KGiSL-HTML for SP"/>
                                </div>
                                <div className="col-6 my-2">
                                    <img src={courseraCertificate_3} className="col-11" alt="Coursera-KGiSL-CSS Style Sheets for SP"/>
                                </div>
                                <div className="col-6 my-2">
                                    <img src={courseraCertificate_4} className="col-11" alt="Coursera-KGiSL-Basics of JavaScript"/>
                                </div>
                                <div className="col-6 my-2">
                                    <img src={courseraCertificate_5} className="col-11" alt="Coursera-Relational Database Management System"/>
                                </div>
                                <div className="col-6 my-2">
                                    <img src={courseraCertificate_6} className="col-11" alt="Coursera-Meta-Introduction to Front End Development"/>
                                </div>
                                <div className="col-6 my-2">
                                    <img src={courseraCertificate_7} className="col-11" alt="Coursera-Meta-Introduction to Back End Development"/>
                                </div>
                                <div className="col-6 my-2">
                                    <img src={courseraCertificate_8} className="col-11" alt="Coursera-Guided Project-CRUD Operations using MangoDB NoSQL"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}