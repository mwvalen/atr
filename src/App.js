import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router'
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Races from './races'
import Lander from './lander'
import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <div>
          <Switch>
            <Route exact path="/" component={Lander} />
            <Route path="/races" component={Races}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
