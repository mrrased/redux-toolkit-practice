import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: false
}

export const DropDownSlice = createSlice({
    name: 'prop',
    initialState,
    reducers:{
        handleOpen:(state)=>{
            state.value = true
        },
        handleClose:(state)=>{
            state.value = false
        },
    }
})

export const { handleOpen, handleClose } = DropDownSlice.actions

export default DropDownSlice.reducer