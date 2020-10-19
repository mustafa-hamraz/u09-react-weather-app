import React from 'react';
import {Link} from 'react-router-dom';
import './Styles.css';

function Nav(){
    
    return(
        <nav className="nav_bar">
            <Link to="/"><li>Hem</li></Link>
            <Link to="/search"><li>Söka</li></Link>
        </nav>
    );
}

export default Nav;