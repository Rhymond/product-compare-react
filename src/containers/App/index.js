import React, {Component} from 'react';
import Header from '../../components/Header'
import {Route, Switch} from 'react-router-dom'

import './style.css';

import Home from '../Home';
import NotFound from '../NotFound';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

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
