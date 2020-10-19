import React from 'react';
import './Styles.css';
import CurrentWeather from './CurrentWeather.js';




class HomePage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            map_clicked: false,
            city: "stockholm"
        };
    }

    handel_map_click = (txt) =>{
       
        this.setState({
            map_clicked: true, 
            city: txt,
        })
    }


    render(){
        const { map_clicked, city} = this.state;
        
        if (!map_clicked){
            return(
                <div className="home_page">
                    <div className="sweden_img" >
                        <div id="lulea" onClick={ this.handel_map_click.bind(this, "luleå") }></div>
                        <div id="umea" onClick={ this.handel_map_click.bind(this, "umeå") }></div>
                        <div id="harnosand" onClick={ this.handel_map_click.bind(this, "härnösand") }></div>
                        <div id="gavle" onClick={ this.handel_map_click.bind(this, "gävle") }></div>
                        <div id="uppsala" onClick={ this.handel_map_click.bind(this, "uppsala") }></div>
                        <div id="stockholm" onClick={ this.handel_map_click.bind(this, "stockholm") }></div>
                        <div id="nykoping" onClick={ this.handel_map_click.bind(this, "nyköping") }></div> 
                        <div id="goteborg" onClick={ this.handel_map_click.bind(this, "göteborg") } ></div>
                        <div id="halmstad" onClick={ this.handel_map_click.bind(this, "halmstad") } ></div>
                        <div id="malmo" onClick={ this.handel_map_click.bind(this, "malmö") }></div>
                    </div>
                </div>
            );
        }
        else{
            return <CurrentWeather city={city} unit="metric"/>        
        }
        
    }
}

export default HomePage;

//<img className="sweden_img" src={'/images/sweden.png'} /> 