import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './routeComponents/Home';
import Beers from './routeComponents/Beers';
import BeerDetails from './routeComponents/BeerDetails';
import RandomBeer from './routeComponents/RandomBeer';
import NewBeer from './routeComponents/NewBeer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={Beers}/>
        <Route exact path='/beer/:id' component={BeerDetails} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
