import React, {useEffect, useState} from 'react';

import { useParams} from "react-router-dom";
import {useAppLocation} from "../hooks ";
import {IMovie} from "../interfaces ";
import {movieService} from "../services";
import {MovieDetails} from "../components";

const MovieInfoPage = () => {
    const [moviesDetails, setMoviesDetails] = useState<IMovie | null>(null)
    const {state} = useAppLocation<{ movie: IMovie }>();
    const {movieId} = useParams();

    useEffect(() => {
            if (state?.movie) {
                setMoviesDetails(state.movie);
            } else {
                movieService.getById(+movieId).then(({ data }) => setMoviesDetails(data));
            }

    }, []);
    return (
        <div>
            {moviesDetails && <MovieDetails moviesDetails={moviesDetails}/>}
        </div>
    );
};

export {MovieInfoPage}