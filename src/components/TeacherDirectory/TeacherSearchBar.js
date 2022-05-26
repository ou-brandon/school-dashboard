import React from 'react';
import { useRef } from 'react';
import { Paper, InputBase } from '@mui/material';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Button } from '@mui/material';

const TeacherSearchBar = (props) => {
    const [queryExist, setQueryExist] = useState(false);
    const searchQuery = useRef();

    const handleQuery = () => {
        const q = searchQuery.current.value;
        setQueryExist(true);
        const queryTeachers = [];
        props.teachers.forEach((teach) => {
            if(teach.data().id.includes(q) || teach.data().firstName.includes(q) || teach.data().lastName.includes(q)){
                queryTeachers.push(teach);
            }
        })
        props.setTeachers(queryTeachers);
    }
    const handleReset = () => {
        setQueryExist(false);
        searchQuery.current.value = "";
        props.fetchTeachers();
    }
    return (
        <>
            <Paper
                component="form"
                sx={{ display: 'flex', alignItems: 'center'}}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Teachers"
                inputRef={searchQuery}
            />
            <IconButton onClick={handleQuery} sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Paper>
            {queryExist && <Button sx={{marginBottom: '1%'}} variant='contained' onClick={handleReset}>Clear Search/Query</Button>}
        </>
    );
}

export default TeacherSearchBar;