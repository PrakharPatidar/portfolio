import React, { Component } from 'react';
import '../../css/main.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Router
} from "react-router-dom";


import Home from '../pages/home';
import About from '../pages/about';
import Work from '../pages/work';
import Contact from '../pages/contact';
import Blogs from '../pages/blogs';
import '../../css/main.css';

const main = () => (
    <div className='main-container transition-left-to-right'>
        <Route exact path='/portfolio' component={() => <Home />} />
        <Route exact path='/portfolio/about' component={() => <About />} />
        <Route exact path='/portfolio/work' component={() => <Work />} />
        <Route exact path='/portfolio/contact' component={() => <Contact />} />
        <Route exact path='/portfolio/blogs' component={() => <Blogs />} />
    </div>
)

export default main