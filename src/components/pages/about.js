import React, { Component } from 'react'
import '../../css/about.css';

class about extends Component {
    render() {
        return (
            <div className='contact-container transition-left-to-right'>
                <section className='section-1'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h2>
                                    My Passion
                            </h2>
                                <p>
                                    I work out of Bangalore, India. Btw I am an Electrical Engineer by education, passionate developer by profession.
                                    Possess master degree in Electric Drive and Power Electroncis.
                            Eager to trying out latest technology and implement those for better software development. <br /><br />
                            I have worked with IBM for 3 years and currently engages with Nymo.ai.
                        </p>

                                <h2>
                                    Interests
                            </h2>
                                <p>
                                    <ul>
                                        <li>Guitar</li>
                                        <li>Flute</li>
                                        <li>Rubik'c cube</li>
                                        <li>Table Tennis</li>
                                    </ul>
                                </p>
                            </div>
                            <div className='col-md-6'>
                                <img src='profile_small.jpg' alt='my profile image' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-2'>
                    <div className='container'>

                        <div className='row'>
                            <div className='col-md-6'>
                                <h2>
                                    Education
                        </h2>
                                <h4>
                                    Nymo.ai
                        </h4>
                                <p>
                                    Year : Aug, 2019 - Present <br />
                            Profile : Data Scientist <br />
                            Project : TMS, VMS <br />
                            Technologies : Python, Tensorflow, NodeJS, ReactJS
                        </p>
                                <h4>
                                    IBM India Pvt. Ltd.
                        </h4>
                                <p>
                                    Year : July, 2016 - July 2019 <br />
                            Profile : Data Scientist <br />
                            Project : Marketing competitive intelligence, Reporting management system, Centralized Data Base services  <br />
                            Technologies : Python, Tensorflow, NodeJS, ReactJS, Java, Kafka, Spark, Spring, Spring boot
                        </p>
                            </div>
                            <div className='col-md-6'>
                                <h2>
                                    Education
                        </h2>
                                <h4>
                                    IIT Roorkee
                        </h4>
                                <p>
                                    Year : 2014-2016, Electric Drives and Power Electronics <br />
                            CGPA : 7.9 <br />
                            Project : Design and Develop a rooftop solar power system <br />
                            Technologies : FPGA, MATLAB, Solar Panel, MOSFET
                        </p>
                                <h4>
                                    Mbm Engineering College, Jodhpur
                        </h4>
                                <p>
                                    Year : 2010-2014, Electrical Engineering <br />
                            Percentage : 79.65 <br />
                            Project : Develop a automated electricity billing system <br />
                            Technologies : Raspberry PI, Electric Meter
                        </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default about
