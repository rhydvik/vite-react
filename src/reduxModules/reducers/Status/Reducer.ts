import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: 'status',
    initialState: {},
    reducers: {
        updateStatus(state, action) {
            const { payload } = action
            return payload
        }
    }
})

export const StatusActions = statusSlice.actions

export const StatusReducer = statusSlice.reducer
