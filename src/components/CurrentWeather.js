import React from 'react';
import './Styles.css';

import FiveDayForecast from './FiveDayForecast.js'


class CurrentWeather extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: "",
            date: "",
            weather: [],
            main: [],
            wind: [],
            sys: [],
            is_loaded: false, 
        };
    }

   

    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.props.city+"&appid=16ce40370539cf4b81309fbb19b4fcda&units="+this.props.unit+"&lang=sv")
        .then(res => res.json())
        .then( json => {
            this.setState({
                is_loaded: true, 
                name: json.name,
                date: json.dt,
                weather: json.weather,
                main: json.main,
                wind: json.wind,
                sys: json.sys,          
            })
        })
    }


    render(){
        const { is_loaded, name, date, weather, main, wind, sys} = this.state;

        
        //handelTime() is a function that converts Unix time to human time 
        function handelTime(unixTime){
            const date = new Date(unixTime*1000).toLocaleTimeString("sv-SE");
            let splittedString=date.split(":");
            let time  = splittedString.slice(0,-1).join(':');
            return time;

        }

        //handelTime() is a function that converts Unix date to human date 
        function handelDate(unix){
            let date = new Date(unix*1000).toLocaleDateString("sv-SE");
            return date;
        }
        

        if (!is_loaded){
            return <div>Loading...</div>
        }
        else{

            return (
                <div>
                    <div className="current_weather_div">

                        {weather.map(result => (
                                        
                            <div className="left_side_div" key={result.id}>
                                
                                <h2>{name}, {sys.country}</h2>
                                <p>{handelDate(date)}</p>
                                <p>{result.description}</p>
                            
                                <div>
                                    <img src={"http://openweathermap.org/img/wn/"+result.icon+"@2x.png"} alt="current_weather_icon"/>
                                    <h1>{main.temp}°</h1>
                                </div>

                            </div>
                        ))}

                        <div className="right_side_info">
                            <div>
                                <li>Maximum Temperatur:  {main.temp_max}°</li>
                                <li>Minimum Temperatur:  {main.temp_min}°</li>    
                                <li>Känns som:  {main.feels_like}°</li>

                            </div>
                            <div>
                                <li>Vindhastighet:  {wind.speed} m/s</li>
                                <li>Soluppgång:  {handelTime(sys.sunrise)}</li>
                                <li>Solnedgång:  {handelTime(sys.sunset)}</li>
                            </div>
                        </div>

                    </div>

                    <FiveDayForecast city={this.props.city} unit={this.props.unit} />

                </div>           
            );
        }
    }
}
  
export default CurrentWeather;