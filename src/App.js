import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import Search from './components/Search.js';
import Footer from './components/Footer.js';



function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav />
          <Switch>
            <Route path="/u09-react-weather-app/" exact component={HomePage} />
            <Route path="/u09-react-weather-app/search" component={Search} />
          </Switch>
          <Footer />
      </div>
    </BrowserRouter>
   
  );
}

export default App;
