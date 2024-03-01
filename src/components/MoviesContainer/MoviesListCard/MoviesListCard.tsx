import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces /movieInterface";
import style from './MoviesListCard.module.css'
import {Rating} from "@mui/material";

import {useNavigate} from "react-router-dom";
import {useTheme} from "../../../hoc/ThemeContext";

interface IProps extends PropsWithChildren {
    movie: IMovie

}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id, vote_average, title, genre_ids, poster_path} = movie
    const navigate = useNavigate()
    const { darkTheme } = useTheme();

    return (
        <div className={`${style.moviesListCard} ${darkTheme ? style.moviesListCardDark : style.moviesListCardLight}`}>
        {/*<div className={style.moviesListCard}>*/}
            <button onClick={() => navigate(`/movies/${id}`, {state: {movie}})}>
                <div className={style.moviesPosterImgDiv}>
                    <img className={style.moviesPosterImg} src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                         alt={`${title}`}/>
                </div>
                <div><Rating name="customized-10" value={vote_average} max={10} precision={0.5} readOnly/></div>
                <p>{title}</p>
            </button>
        </div>
    );
};

export default MoviesListCard;