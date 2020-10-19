import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './components/HomePage.js';
import Nav from './components/Nav.js';
import Search from './components/Search.js';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
