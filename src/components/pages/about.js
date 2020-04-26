import React, { Component } from 'react'
import '../../css/about.css';

class about extends Component {
    render() {
        return (
            <div className='container contact-container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>
                            About Me
                            </h2>
                        <p>
                            Electrical engineer by education, passionate developer by profession. Eager to trying out latest technology and implement those for better software development
                        </p>

                        <h2>
                            Interests
                            </h2>
                        <p>
                            <ul>
                                <li>Guitar</li>
                                <li>Guitar</li>
                                <li>Rubik'c cube</li>
                                <li>Rubik'c cube</li>
                            </ul>
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <img src='profile_small.jpg' alt='my profile image' />
                    </div>
                </div>
            </div>
        )
    }
}

export default about
