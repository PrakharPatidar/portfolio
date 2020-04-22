import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';
import Blogs from './components/blogs';
import Footer from './components/footer';
import './css/common.css';

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/portfolio'>
            <Home />
          </Route>
          <Route exact path='/portfolio/about'>
            <About />
          </Route>
          <Route exact path='/portfolio/work'>
            <Work />
          </Route>
          <Route exact path='/portfolio/contact'>
            <Contact />
          </Route>
          <Route exact path='/portfolio/blogs'>
            <Blogs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;