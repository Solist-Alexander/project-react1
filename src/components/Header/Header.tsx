import React, {useState} from 'react';

import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import SwitchForHeader from "../SwitchForHeader/SwitchForHeader";
import {useTheme} from "../../hoc/ThemeContext";

const Header = () => {
    const { darkTheme, toggleTheme } = useTheme();

    return (
        <div className={`${style.header} ${darkTheme ? style.headerDark : style.headerLight}`}>
            <p className={style.textDatabase} >The Movie Database</p>
            <div>
                <NavLink to={'/movies'} >Movies</NavLink>
                <NavLink to={'/genres'} >Genres</NavLink>
                <NavLink to={'/search'} >Search</NavLink>
            </div>
            <p className={style.textTheme} >Theme</p>
            <SwitchForHeader onChange={toggleTheme} darkTheme={darkTheme}/>
            <div className={style.iconUser}>
                <img width="40" height="40" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-user-web-flaticons-flat-flat-icons-2.png" alt="external-user-web-flaticons-flat-flat-icons-2"/>
            </div>

            </div>
    );
};

export default Header;