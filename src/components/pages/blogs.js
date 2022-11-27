import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../css/blogs.css';

class blogs extends Component {
    render() {
        return (
            <div className='container blog-container transition-left-to-right'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2>
                            My published blogs
                        </h2>
                        <li>
                            <a target="_blank" href='https://medium.com/@prakhar.patidar987/complete-guide-for-writing-software-test-cases-for-python-projects-1-f4651133a34a'>Intro to test cases in python using pytest</a>
                        </li>
                    </div>
                    {/* <div className='col-md-6'>

                    </div> */}
                </div>
            </div>
        )
    }
}

export default blogs
