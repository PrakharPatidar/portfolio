import React, { Component } from 'react'
import '../../css/about.css';
import { DownCircleTwoTone, DownCircleOutlined, DownCircleFilled } from '@ant-design/icons';

class about extends Component {

    constructor(props) {
        super(props)
        // this.nextScroll = React.createRef();
        this.state = {

        }
    }

    render() {
        return (
            <div className='contact-container transition-left-to-right'>
                <section className='section-1' ref={this.nextScroll}>
                    <div className='container container-inside'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src='profile_small.jpg' alt='my profile image' />
                            </div>
                            <div className='col-md-8'>
                                <h2>
                                    More about me...
                                </h2>
                                <p>
                                    I work out of Bangalore, India. I am an Electrical Engineer turned ML Engineeri.
                                    Possess master degree in Electric Drive and Power Electroncis.
                                    Eager to trying out latest technology and implement those for better software development. <br />
                                </p>
                                <h2>
                                    Interests
                                </h2>
                                <p>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Guitar</li>
                                        <li className='list-group-item'>Reading Books</li>
                                        <li className='list-group-item'>Flute</li>
                                        <li className='list-group-item'>Rubik'c cube</li>
                                        <li className='list-group-item'>Table Tennis</li>
                                        <li className='list-group-item'>Chess</li>
                                        <li className='list-group-item'>Cooking</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-2'>
                    <div className='container container-inside'>

                        <div className='row'>
                            <div className='col-md-6'>
                                <h2>
                                    Work Experience
                                </h2>
                                <h4>
                                    Nymo.ai
                                </h4>
                                <dl class="row">
                                    <dt class="col-sm-3">Year : </dt>
                                    <dd class="col-sm-9">Aug, 2019 - Present.</dd>
                                    <dt class="col-sm-3 text-truncate">Profile :</dt>
                                    <dd class="col-sm-9">Data Scientist.</dd>
                                    <dt class="col-sm-3">Project :</dt>
                                    <dd class="col-sm-9">Training Management System, Video Management System.</dd>
                                    <dt class="col-sm-3">Technologies :</dt>
                                    <dd class="col-sm-9">Python, Tensorflow, MongoDb, Dlib, Celery, Javascript, NodeJS, ReactJS.</dd>
                                </dl>
                                <h4>
                                    IBM India Pvt. Ltd.
                                </h4>
                                {/* <p>
                                    <b>Year : </b> July, 2016 - July 2019 <br />
                                    <b>Profile :</b> Data Scientist <br />
                                    <b>Project : </b> Marketing competitive intelligence, Reporting management system, Centralized Data Base services, Document processing pipeline <br />
                                    <b>Technologies :</b> Python, Tensorflow, NodeJS, JavaScript, ReactJS, Java, Kafka, Spark, Spring, Spring boot, Docker, Docker swarm, Spark, Bluemix,
                                </p> */}

                                <dl class="row">
                                    <dt class="col-sm-3">Year : </dt>
                                    <dd class="col-sm-9">July, 2016 - July 2019.</dd>
                                    <dt class="col-sm-3 text-truncate">Profile :</dt>
                                    <dd class="col-sm-9">Data Scientist.</dd>
                                    <dt class="col-sm-3">Project :</dt>
                                    <dd class="col-sm-9">Marketing competitive intelligence, Reporting management system, Centralized Data Base services, Document processing pipeline.</dd>
                                    <dt class="col-sm-3">Technologies :</dt>
                                    <dd class="col-sm-9">Python, Tensorflow, NodeJS, JavaScript, ReactJS, Java, Kafka, Spark, Spring, Spring boot, Docker, Docker swarm, Spark, Bluemix, IBM Watson, Chatbots.</dd>

                                </dl>
                            </div>
                            <div className='col-md-6'>
                                <h2>
                                    Education
                                </h2>
                                <h4>
                                    IIT Roorkee - Post Graduation
                                </h4>
                                {/* <p>
                                    <b>Year :</b> 2014-2016, Electric Drives and Power Electronics <br />
                                    <b>Degree :</b> Master of Technology <br />
                                    <b>CGPA :</b> 7.9 <br />
                                    <b>Project :</b> Design and Develop a rooftop solar power system <br />
                                    <b>Technologies :</b> FPGA, MATLAB, Solar Panel, MOSFET
                        </p> */}
                                <dl class="row">
                                    <dt class="col-sm-3">Year : </dt>
                                    <dd class="col-sm-9">2014-2016, Electric Drives and Power Electronics.</dd>
                                    <dt class="col-sm-3 text-truncate">Degree :</dt>
                                    <dd class="col-sm-9">Master of Technology.</dd>
                                    <dt class="col-sm-3 text-truncate">CGPA :</dt>
                                    <dd class="col-sm-9">7.9.</dd>
                                    <dt class="col-sm-3">Project :</dt>
                                    <dd class="col-sm-9">Design and Develop a rooftop solar power system.</dd>
                                    <dt class="col-sm-3">Technologies :</dt>
                                    <dd class="col-sm-9">FPGA, MATLAB, Solar Panel, MOSFET.</dd>

                                </dl>
                                <h4>
                                    Mbm Engineering College, Jodhpur - Graduation
                                </h4>
                                {/* <p>
                                    <b>Year :</b> 2010-2014, Electrical Engineering <br />
                                    <b>Degree :</b> Bachelor of Engineering <br />
                                    <b>Percentage :</b> 79.65 <br />
                                    <b>Project :</b> Developed an automated electricity billing system <br />
                                    <b>Technologies :</b> Raspberry PI, Electric Meter
                        </p> */}
                                <dl class="row">
                                    <dt class="col-sm-3">Year : </dt>
                                    <dd class="col-sm-9">2010-2014, Electrical Engineering.</dd>
                                    <dt class="col-sm-3 text-truncate">Degree :</dt>
                                    <dd class="col-sm-9">Bachelor of Engineering.</dd>
                                    <dt class="col-sm-3 text-truncate">Percentage :</dt>
                                    <dd class="col-sm-9">79.65.</dd>
                                    <dt class="col-sm-3">Project :</dt>
                                    <dd class="col-sm-9">Developed an automated electricity billing system.</dd>
                                    <dt class="col-sm-3">Technologies :</dt>
                                    <dd class="col-sm-9">Raspberry PI, Electric Meter.</dd>

                                </dl>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default about
