import React, { Component } from 'react'
import '../../css/work.css';

class work extends Component {
    render() {
        return (
            <div className='container work-container transition-left-to-right'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>
                            Projects
                        </h2>
                        <h4>
                            Marketing competitive Analysis
                        </h4>
                        <p>
                            <b>Summary:</b> Developed 360 degree dashboards powered by IBM Watson Contect Analytics. Dashboards had lots of charts shows
                            real time data of various KPI along with their competitor. It helps client to compare how they are doing in market along with their competitor.<br/>
                            <b>Technologies hands on:</b> Java Script, Bootstrap, Highchart.js, IBM watson contect analytics, IBM watson explorer, Java jersey for restful API.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>
                            Work Experience
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
        )
    }
}

export default work
