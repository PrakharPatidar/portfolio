import React, { Component } from 'react'
import '../../css/resume.css';

class resume extends Component {
    render() {
        return (
            <div className='container resume-container transition-left-to-right'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>
                            This is resume page.
                        </h2>
                        <p>
                            Download my complete resume.
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
                            <li>NodeJS</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Java Script</li>
                            <li>ReactJS</li>
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
                            <li>TensorFlow</li>
                            <li>Keras</li>
                            <li>Express</li>
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
