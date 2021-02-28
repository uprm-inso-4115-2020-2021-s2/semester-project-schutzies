import React from 'react';
import './App.css';
import Home from './pages/Home'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Layout from './pages/domain/Layout';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/app' component={Layout} />
          {/* <Redirect from="/app" to="/app" /> */}
          {/* <Route path='/app/:view' component={Layout} /> */}


          <Route>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
