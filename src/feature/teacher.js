import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    teacherData: [],
    error: null,
};
// export const createTeacher = createAsyncThunk(
//     "/register/teacher",
//     async ({formData}) => {
//         console.log(formData)
//         const response = await fetch("http://localhost:5000/api/teacher/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//         });
//         const result = response.json();
//         return result;
//     }
// );
export const fetchTeacher = createAsyncThunk("/fetch/teacher", async () => {
    const response = await fetch("http://localhost:5000/api/teacher/get-teacher")
    const result = response.json()
    return result
})
const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeacher.pending, (state) => {
                (state.loading = true), (state.error = null);
            })
            .addCase(fetchTeacher.fulfilled, (state, action) => {
                (state.loading = false),
                    (state.error = null),
                    (state.teacherData = action.payload);
            })
            .addCase(fetchTeacher.rejected, (state, action) => {
                (state.loading = false), (state.error = action.payload);
            })


    },
});

export default teacherSlice.reducer;
