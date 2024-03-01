import React, {useState} from 'react';

import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import SwitchForHeader from "../SwitchForHeader/SwitchForHeader";

const Header = () => {


    return (
        <div className={style.header}>
            <span style={{color: "white", fontSize: "30px", marginLeft:'50px'}}>The Movie Database</span>
            <div>
                <NavLink to={'/movies'} >Movies</NavLink>
                <NavLink to={'/genres'} >Genres</NavLink>
                <NavLink to={'search'} >Search</NavLink>
            </div>
            <span style={{color: "white", fontSize: "30px", marginLeft:'120px', marginRight:'15px'}}>Theme</span>
            <SwitchForHeader />
            <div className={style.iconUser}>
                <img width="40" height="40" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-user-web-flaticons-flat-flat-icons-2.png" alt="external-user-web-flaticons-flat-flat-icons-2"/>
            </div>

            </div>
    );
};

export default Header;