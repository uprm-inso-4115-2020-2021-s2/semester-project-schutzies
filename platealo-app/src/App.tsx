import React from 'react';
import './App.css';
import PlatealoBackgroundImg from './assets/platealo_background.jpg'
import { Button } from 'react-bootstrap'
import Navbar from './components/Navbar/Navbar'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <div className='app__navbar'>
        <Navbar />
      </div>
      <div className='app__hero'>
        <img src={PlatealoBackgroundImg} alt='Platealo Image' />
        <div className='app__centered'>
          <div className='app__content'>
            <h1>Not sure what to <span className='app__cook'>COOK</span>?</h1>
            <p>Find your ideal <span className='app__recipe'>RECIPE</span> with what you have at home</p>
            <Button>Let's Cook!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
