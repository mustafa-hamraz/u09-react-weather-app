import React from 'react';
import './App.css';

import CurrentWeather from './components/CurrentWeather.js'
import FiveDayForecast from './components/FiveDayForecast.js'

function App() {
  return (
    <div>
      <CurrentWeather city="Södertälje" unit="metric"/>
      <FiveDayForecast />
    </div>
    
  );
}

export default App;
