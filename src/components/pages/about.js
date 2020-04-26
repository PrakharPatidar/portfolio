import React, { Component } from 'react'

class about extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>
                            About Me
                            </h2>
                        <p>
                            Electrical engineer by education, passionate coder by profession. Eager to trying out latest technology
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
