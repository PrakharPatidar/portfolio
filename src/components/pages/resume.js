import React, { Component } from 'react'
import '../../css/resume.css';
import Resume from '../../data/Resume.pdf';

class resume extends Component {
    render() {
        return (
            <div className='container resume-container transition-left-to-right'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>
                            Professional Summary
                        </h2>
                        <p>
                            Download complete <a href={Resume} download>resume</a>
                    </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <h2>
                            Technologies
                    </h2>
                    </div>
                    <div className='col-md-5'>
                        <h2>
                            Proficient
                    </h2>
                        <ul>
                            <li>Python</li>
                            <li>NodeJS</li>
                            <li>Java</li>
                            <li>Java Script</li>
                            <li>ReactJS</li>
                            <li>MongoDb</li>
                            <li>SQL Db</li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h2>
                            Comfort
                    </h2>
                        <ul>
                            <li>C</li>
                            <li>C++</li>
                            <li>Erlang</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <h2>
                            Frameworks
                    </h2>
                    </div>
                    <div className='col-md-5'>
                        <h2>
                            Proficient
                    </h2>
                        <ul>
                            <li>Spark</li>
                            <li>Airflow</li>
                            <li>TensorFlow</li>
                            <li>Keras</li>
                            <li>Node Express</li>
                            <li>Spring, Spring boot</li>
                            <li>Kafka</li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h2>
                            Comfort
                    </h2>
                        <ul>
                            <li>Spark</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default resume
