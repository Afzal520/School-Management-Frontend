import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: true,
    resultData: [],
    error: null
}
const BASE_API_URL=(import.meta.env.VITE_API_URL);
export const fetchResult = createAsyncThunk("/get/result", async ({id}) => {
    const response = await fetch(`${ BASE_API_URL}/api/student/getmark/${id}`)
    const result = await response.json()
    console.log(result)
     return result
})
const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {},
    extraReducers: (bulider) => {
        bulider.addCase(fetchResult.pending, (state) => {
            state.loading = true

        })
            .addCase(fetchResult.fulfilled, (state, action) => {
                state.loading = false,
                    state.resultData = action.payload
            })
            .addCase(fetchResult.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    }
})

export default resultSlice.reducer
