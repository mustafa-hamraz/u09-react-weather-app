import React from 'react';
import HomePage from './HomePage.js';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service

    }
  
    render() {
      if (this.state.hasError != true) {

        return this.props.children;
        
      }else{
          
        return <h1>Something went wrong.</h1>
      }
      
    }
}

export default ErrorBoundary;