import { createAsyncThunk, createSlice, AsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";
import { User } from "../../types/types";

const initialState: User = {
    data: [],
    loading: false,
    error: ''
}

export const getUsers: AsyncThunk<IUser[], void, {}> = createAsyncThunk('user/getUser', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
        });
    }
})

export default userSlice.reducer;