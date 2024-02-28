import {createBrowserRouter, Navigate, useSearchParams} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesPage from "./pages/MoviesPage";
import React from "react";
import MovieInfoPage from "./pages/MovieInfoPage";
import GenresPage from "./pages/GenresPage";
import GenresIdList from "./components/GenresIdContainer/GenresIdList";



const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies',element:<MoviesPage/>,
            },
            {
                path:'movies/:movieId', element:<MovieInfoPage/>
            },
            {
                path:'genres', element: <GenresPage/>,children:[
                    {
                        path:'/genres/:genreId', element:<GenresIdList/>
                    },
                    {
                        path:'/genres/:genreId/:movieId', element:<MovieInfoPage/>
                    }
                ]
            }
        ]
    }

])

export {
    router
}