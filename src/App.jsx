import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Views/Home';
import RandomBeer from './Views/RandomBeer';
import Beers from './Views/Beers';
import NewBeer from './Views/NewBeer';

import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/beers" component={Beers}></Route>
            <Route path="/random-beer" component={RandomBeer}></Route>
            <Route path="/new-beer" component={NewBeer}></Route>
          </Switch>
          <NavBar />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
