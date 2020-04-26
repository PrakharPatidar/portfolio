import React, { Component } from 'react'
import { NavLink, } from "react-router-dom";
import '../../css/header.css';
import { LinkedinFilled, MailOutlined, TwitterCircleFilled, WhatsAppOutlined } from '@ant-design/icons';

class header extends Component {
    render() {
        return (
            <div className='header row'>
                <div className='col-md-8 routing'>
                    <NavLink to='/portfolio' className='each-header' exact activeClassName='active-link'>Home</NavLink>
                    <NavLink to='/portfolio/about' className='each-header' activeClassName='active-link'>About</NavLink>
                    <NavLink to='/portfolio/work' className='each-header' activeClassName='active-link'>Work</NavLink>
                    {/* <NavLink to='/portfolio/contact' className='each-header' activeClassName='active-link'>Contact</NavLink> */}
                    <NavLink to='/portfolio/blogs' className='each-header' activeClassName='active-link'>Blogs</NavLink>
                </div>
                <div className='col-md-4 contact-icon'>
                    {/* <button> */}
                    <MailOutlined />
                    <span> Mail</span>

                    <LinkedinFilled />
                    <span>LinkedIn</span>

                    <TwitterCircleFilled />
                    <span>Twitter</span>

                    <WhatsAppOutlined />
                    <span>Whatsapp</span>
                    {/* </button> */}
                    {/* <a class="nav-link active" target='_location' href='https://www.linkedin.com/in/prakharpatidar987'>Mail</a> */}
                </div>

            </div>
        )
    }
}

export default header
