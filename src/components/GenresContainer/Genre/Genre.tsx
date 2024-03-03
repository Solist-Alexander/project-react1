import React, {FC, PropsWithChildren} from 'react';

import style from './Genre.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {IGenre} from "../../../interfaces ";
interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id,name} = genre
    const navigate = useNavigate()
    return (
        <div className={style.genreDiv}>
            <NavLink to={`/genres/${id}`} >
                {name}
            </NavLink>

        </div>
    );
};

export {Genre};