import React from 'react';
import './Styles.css';
import CurrentWeather from './CurrentWeather.js';
import ErrorBoundary from './ErrorBoundary.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      is_loaded: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    
    });
  }

  handleSubmit(event) {
    this.setState({
      is_loaded: true,
    });
    event.preventDefault();
  }

  render() {
    if(this.state.is_loaded === true){
      return (
        <ErrorBoundary>
              <CurrentWeather city={this.state.value || "stockholm"} unit={"metric"} />    
        </ErrorBoundary>
      
      );
    }else{
      return (
        <form className="search_form" onSubmit={this.handleSubmit}>
          <input className="search_input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="t.ex. Barcelona"/>
          <input className="search_submit" type="submit" value="Söka" />
        </form>
      );
    }
  
    
    
  }
}
  export default Search;