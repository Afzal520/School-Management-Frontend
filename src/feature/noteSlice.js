import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    noteData: [],
    error: null
}

export const fetchNotes = createAsyncThunk("/fetch/notes", async () => {
    const response = await fetch("http://localhost:5000/post/fetchpdf")
    const result = await response.json()
     return result
})


const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {},
    extraReducers: (bulider) => {
        bulider.addCase(fetchNotes.pending, (state) => {
            state.loading = true,
                state.error = null

        })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loading = false,
                    state.noteData = action.payload
                state.error = null
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    }
})

export default noteSlice.reducer