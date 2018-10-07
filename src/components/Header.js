import React from 'react'
import {NavLink} from 'react-router-dom';
import '../styles/components/Header.css'

 const Header = () =>(
    <header>
    <h4>Expensify</h4>
    <ul>
    
    <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
    <li><NavLink to="/create" activeClassName="is-active">Add New</NavLink></li>
    <li><NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink></li>
    <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
    
    </ul>
    </header>
);

export default Header;