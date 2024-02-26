import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces /movieInterface";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id, title, genre_ids, poster_path} = movie

    console.log( id, title)
    return (
        <div>

        </div>
    );
};

export default MoviesListCard;