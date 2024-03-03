import React from "react";

import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenresPage, MovieInfoPage, MoviesPage, SearchPage} from "./pages";
import {GenresIdList} from "./components";








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
                    }
                ]
            },
            {
                path:'search', element:<SearchPage/>
            }
        ]
    }

])

export {
    router
}