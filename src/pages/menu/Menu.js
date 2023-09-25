import React from 'react';
import {Link} from 'react-router-dom';


function Menu() {
  return (
    <nav className="menu" role="navigation"> 
        <ul>
            <li><Link to="/" >Homepage</Link></li>
            <li><Link to="/about" title="About">About</Link></li>
            <li><Link to="/login" title="Login">Login</Link></li> 
            <li><Link to="/contact" title="Contact">Contact</Link></li> 
        </ul>
    </nav>
  );
}

export default Menu;