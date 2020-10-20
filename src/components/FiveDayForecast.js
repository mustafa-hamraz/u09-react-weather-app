import React from 'react';
import './Styles.css'

class FiveDayForecast extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            five_day_forecast: [],
            is_loaded: false,    
        };
    }
    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+this.props.city+"&appid=16ce40370539cf4b81309fbb19b4fcda&units="+this.props.unit+"&lang=sv")
        .then(res => res.json())
        .then( json => {
            this.setState({
                is_loaded: true, 
                five_day_forecast: json.list,
            })
        })
    }

    render(){
        const { is_loaded, five_day_forecast } = this.state;

        
        //handelTime() is a function that converts Unix time to human time 
        function handelTime(unixTime){
            const date = new Date(unixTime*1000).toLocaleTimeString("sv-SE");
            let splittedString = date.split(":");
            let time  = splittedString.slice(0,-1).join(':');
            return time;

        }

        //handelTime() is a function that converts Unix date to human date 
        function handelDate(unix){
            let date = new Date(unix*1000).toLocaleDateString("sv-SE");
            return date;
        }
        

        if (!is_loaded){
            return <div className="loading_api">Loading...</div>
        }
        else{
           return (
                <div>
                    {five_day_forecast.map( each_forecast => (

                        <div key={each_forecast.dt}>

                            {each_forecast.weather.map(weather => (
                                
                                <div className="each_forecast" key={weather.id}>
                                    
                                    <div className="data_time">
                                        <h3>{handelTime(each_forecast.dt)}</h3>
                                        <p>{handelDate(each_forecast.dt)}</p>
                                    </div>

                                    <div>
                                        <img src={"http://openweathermap.org/img/wn/"+ weather.icon +"@2x.png"} alt="weather_icon"/>
                                        <p>{ weather.description }</p>
                                    </div>

                                    <div> 
                                        <h2>{ Math.round(each_forecast.main.temp) }°</h2>
                                    </div>

                                </div>

                            ))} 
                        </div>    
                    ))}        
                </div>
            );
        }



    }
}

  
export default FiveDayForecast;
