import React from 'react';
import './App.css';

import CurrentWeather from './components/CurrentWeather.js'
//import FiveDayForecast from './components/FiveDayForecast.js'

function App() {
  return (
    <div>
      <CurrentWeather city="södertälje" unit="metric"/>
    </div>
    
  );
}

export default App;
