import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink
                    to='/'
                    
                    >Main</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink
                    to='/Sports'
                    
                    >Sports</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink
                    to='/Entertainment'
                    
                    >Entertainment</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink
                    to='/Technology'
                    
                    >Technology</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink
                    to='/Search'
                    
                    >Search</NavLink>
                </li>
            </ul>

        </div>
    );
}

export default NavBar;
