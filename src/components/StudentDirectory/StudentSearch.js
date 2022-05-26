import React from 'react';
import { useRef } from 'react';
import { Paper, InputBase } from '@mui/material';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Button } from '@mui/material';

const StudentSearch = (props) => {
    const [queryExist, setQueryExist] = useState(false);
    const searchQuery = useRef();

    const handleQuery = () => {
        const q = searchQuery.current.value;
        setQueryExist(true);
        const queryStudents = [];
        props.students.forEach((stdnt) => {
            if(stdnt.data().id.includes(q) || stdnt.data().firstName.includes(q) || stdnt.data().lastName.includes(q) || (stdnt.data().grade + '').includes(q)){
                queryStudents.push(stdnt);
            }
        })
        props.setStudents(queryStudents);
    }
    const handleReset = () => {
        setQueryExist(false);
        searchQuery.current.value = "";
        props.fetchStudents();
    }
    return (
        <>
            <Paper
                component="form"
                sx={{ display: 'flex', alignItems: 'center' }}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Students"
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

export default StudentSearch; 