import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { handleOpen } from '../../Features/DropDownSlice/DropDownSlice';
import Home from '../Home/Home';


const TestModal = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Button onClick={() => dispatch(handleOpen())}>Open modal</Button>
            <Home />
        </div>
    );
};

export default TestModal;