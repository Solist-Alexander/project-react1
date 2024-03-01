import React, {useState} from 'react';

import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import SwitchForHeader from "../SwitchForHeader/SwitchForHeader";

const Header = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const handleThemeChange = () => {
        setDarkTheme(prevTheme => !prevTheme);
        if (!darkTheme) {
            document.body.style.backgroundColor = "#fabbbb"; // для светлой темы
        } else {
            document.body.style.backgroundColor = "#3c3c3c"; // для темной темы
        }
    };
    return (
        <div className={`${style.header} ${darkTheme ? style.headerDark : style.headerLight}`}>
            <span style={{color: "white", fontSize: "30px", marginLeft:'50px'}}>The Movie Database</span>
            <div>
                <NavLink to={'/movies'} >Movies</NavLink>
                <NavLink to={'/genres'} >Genres</NavLink>
                <NavLink to={'/search'} >Search</NavLink>
            </div>
            <span style={{color: "white", fontSize: "30px", marginLeft:'120px', marginRight:'15px'}}>Theme</span>
            <SwitchForHeader onChange={handleThemeChange} darkTheme={darkTheme}/>
            <div className={style.iconUser}>
                <img width="40" height="40" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-user-web-flaticons-flat-flat-icons-2.png" alt="external-user-web-flaticons-flat-flat-icons-2"/>
            </div>

            </div>
    );
};

export default Header;