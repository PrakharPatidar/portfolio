import React, { Component } from 'react'
import { NavLink, } from "react-router-dom";
import '../css/header.css';

class header extends Component {
    render() {
        return (
            <div className='header'>
                <NavLink to='/portfolio' className='each-header' exact activeClassName='active-link' >Home</NavLink>
                <NavLink to='/portfolio/about' className='each-header' activeClassName='active-link'>About</NavLink>
                <NavLink to='/portfolio/work' className='each-header' activeClassName='active-link'>Work</NavLink>
                <NavLink to='/portfolio/contact' className='each-header' activeClassName='active-link'>Contact</NavLink>
                <NavLink to='/portfolio/blogs' className='each-header' activeClassName='active-link'>Blogs</NavLink>
            </div>
        )
    }
}

export default header
