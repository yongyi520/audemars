import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.sass';

import AllEvents from './layout/AllEvents/AllEvents'
import Event from './layout/Event/Event';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Event}/>
          <Route exact path="/events" component={AllEvents}/>
          <Route exact path="/event" component={Event}/>
        </Switch>
      </Router>
    );
  }
}

export default App;