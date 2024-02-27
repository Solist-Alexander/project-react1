import React from 'react';
import MoviesList from "../components/MoviesContainer/MoviesList/MoviesList";
import PaginationForMovie from "../components/PaginationForMovie/PaginationForMovie";

const MoviesPage = () => {
    return (
        <div>
            <MoviesList/>
            <PaginationForMovie/>
        </div>
    );
};

export default MoviesPage;