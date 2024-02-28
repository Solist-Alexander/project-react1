import React from 'react';
import {Pagination, Stack} from "@mui/material";
const PaginationForMovie = () => {

    return (
        <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" style={{background:'gold', width:'350px'}}/>
        </Stack>
    );
};

export default PaginationForMovie;