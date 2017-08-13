import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

import Home from './Home'
import NotFound from './NotFound'
import About from './About'

class App extends Component {
  render() {
    return (
      <div>
       <Switch> 
        <Route path="/" exact component={Home} /> 
        <Route path="/about" component={About} /> 
        <Route path="/404" component={NotFound} /> 
        <Redirect to="/404" /> 
       </Switch>
      </div>
    );
  }
}

export default App;
