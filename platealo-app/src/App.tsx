import React from 'react';
import './App.css';
import Home from './pages/Home'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Layout from './pages/domain/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/app' component={Layout} />
          {/* redirect  from /app to /app/byingredient  by default */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
