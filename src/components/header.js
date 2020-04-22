import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class header extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <NavLink to='/portfolio' exact activeClassName='active-link' >Home</NavLink>
                    <NavLink to='/portfolio/about' activeClassName='active-link'>About</NavLink>
                    <NavLink to='/portfolio/work' activeClassName='active-link'>Work</NavLink>
                    <NavLink to='/portfolio/contact' activeClassName='active-link'>Contact</NavLink>
                </div>
            </div>
        )
    }
}

export default header
