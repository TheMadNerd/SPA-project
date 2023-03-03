import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    return(
        
        <nav>
            <ul>
                <li><NavLink to='/'>Start</NavLink></li>
                <li><NavLink to='/products'>Produkty</NavLink></li>
                <li><NavLink to='/contact'>Kontakt</NavLink></li>
                <li><NavLink to='/admin'>Panel Admina</NavLink></li>
            </ul>
        </nav>
        
    )
}

export default Navigation