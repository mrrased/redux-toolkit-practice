import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../Features/Counter/CounterSlice';
import DropDownReducer from "../Features/DropDownSlice/DropDownSlice";

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        modal: DropDownReducer,
    },
})