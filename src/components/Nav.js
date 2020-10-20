import React from 'react';
import {Link} from 'react-router-dom';
import './Styles.css';

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            home_classname: "home_clicked",
            search_classname: "search_not_clicked",
        }

        this.handle_home_click = this.handle_home_click.bind(this);
        this.handle_search_click = this.handle_search_click.bind(this);
    }

    handle_home_click(event) {
        this.setState({
            home_classname: "home_clicked",
            search_classname: "search_not_clicked",
        });
        event.preventDefault();

    }

    handle_search_click(event) {
        this.setState({
            search_classname: "search_clicked",
            home_classname: "home_not_clicked",
    
        });
        event.preventDefault();
    }


    render(){
        const { hem_clicked, search_clicked } = this.state;

        return(
            <nav className="nav_bar">

                <div onClick={this.handle_home_click} >
                    <Link to="/u09-react-weather-app/">
                        <li className={this.state.home_classname}>Hem</li>
                    </Link>
                </div>
                

            <div onClick={this.handle_search_click} >
                <Link to="/u09-react-weather-app/search" >
                    <li className={this.state.search_classname}>Söka</li>
                </Link>
            </div>
               

            </nav>
        ); 
    
    }
    
}

export default Nav;