import React from 'react';
import './App.css';
import Home from './pages/Home'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Layout from './pages/domain/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app' style={{ height: window.innerHeight }}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/signin' exact>
            <Signin />
          </Route>
          <Route path='/signup' exact>
            <Signup />
          </Route>
          <Route path='/app' exact>
            <Layout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
