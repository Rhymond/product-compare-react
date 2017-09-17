import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import {Home, NotFound} from '../';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    );
  }
}
