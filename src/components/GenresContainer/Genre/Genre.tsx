import React, {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces /genreInterface";
import style from './Genre.module.css'
import {NavLink, useNavigate} from "react-router-dom";
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

export default Genre;