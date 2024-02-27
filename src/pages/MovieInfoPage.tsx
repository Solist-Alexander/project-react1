import React, {useEffect, useState} from 'react';
import MovieDetails from "../components/MoviesContainer/MoviesDetails/MovieDetails";
import { useParams} from "react-router-dom";
import {movieService} from "../services/movieService";
import {IMovie} from "../interfaces /movieInterface";
import {useAppLocation} from "../hooks /useAppLocation";

const MovieInfoPage = () => {
    const [moviesDetails, setMoviesDetails] = useState<IMovie | null>(null)
    const {state} = useAppLocation<{ movie: IMovie }>();
    const {id} = useParams();
    useEffect(() => {
        if (id) {
            if (state?.movie) {
                setMoviesDetails(state.movie);
            } else {
                movieService.getById(+id).then(({ data }) => setMoviesDetails(data));
            }
        }
    }, []);
    return (
        <div>
            {moviesDetails && <MovieDetails moviesDetails={moviesDetails}/>}
        </div>
    );
};

export default MovieInfoPage;