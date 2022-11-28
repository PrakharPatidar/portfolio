import React, { Component } from 'react'
import { NavLink, } from "react-router-dom";
import '../../css/header.css';
import { LinkedinFilled, MailOutlined, TwitterCircleFilled, GithubOutlined } from '@ant-design/icons';

class header extends Component {
    render() {
        return (
            <div className='header'>
                {/* <div className='development'>
                    Under Development
                </div> */}
                <div className='col-md-8 routing'>
                    <NavLink to='/portfolio' className='each-header' exact activeClassName='active-link'>Home</NavLink>
                    <NavLink to='/portfolio/about' className='each-header' activeClassName='active-link'>About</NavLink>
                    <NavLink to='/portfolio/work' className='each-header' activeClassName='active-link'>Work</NavLink>
                    {/* <NavLink to='/portfolio/contact' className='each-header' activeClassName='active-link'>Contact</NavLink> */}
                    <NavLink to='/portfolio/blogs' className='each-header' activeClassName='active-link'>Blogs</NavLink>
                    <NavLink to='/portfolio/resume' className='each-header' activeClassName='active-link'>Resume</NavLink>
                    <NavLink to='/portfolio/apps' className='each-header' activeClassName='active-link'>Apps</NavLink>
                </div>
                <div className='col-md-4 contact-icon'>
                    <a className='text-light' href='https://www.linkedin.com/in/prakharpatidar987' target='_location'><LinkedinFilled /></a>
                    <a className='text-light' target='_location' href='https://twitter.com/____prakhar____'><TwitterCircleFilled /></a>
                    <a className='text-light' target='_location' href='https://github.com/PrakharPatidar'><GithubOutlined /></a>
                    <a className='text-light' href='mailto:prakhar.patidar987@gmail.com' rel="noopener noreferrer" target='_location'><MailOutlined /></a>
                </div>
            </div>
        )
    }
}

export default header
