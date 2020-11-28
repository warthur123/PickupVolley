import React, { Component } from 'react';
import './header.css'


class Header extends Component {
    render() { 
        return ( 
            <div className="header">
                <h1>Pickup Volleyball Score Keeper</h1>
                <span>By Arthur Wu</span>
            </div>
         );
    }
}
 
export default Header;