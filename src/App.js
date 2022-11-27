import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Footer from './components/layout/footer';
import Header from './components/layout/header';
import Main from './components/layout/main';
import './css/common.css';

function App() {
  return (
    <div className='page-container'>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;