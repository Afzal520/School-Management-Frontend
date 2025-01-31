import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {

    loading: false,
    studentData: [],
    error: null,
}
// fetch all student
// const BASE_URL = process.env.REACT_APP_BASE_URL;
export const fetchStudents = createAsyncThunk("student/fethstudents", async () => {
    const response = await fetch(`http://localhost:5000/register/getstud`)
    console.log("helloooo")
    const data = await response.json()
    return data
})
// edit student details
export const editStudent = createAsyncThunk("student/edit", async ({ id, formData }) => {

    console.log(id)
    console.log(formData)
    const response = await fetch(`http://localhost:5000/register/edit/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    const result = await response.json()
    return result
})
export const fetchAuthStudent = createAsyncThunk("/student/register", async () => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(fromData)
    })

    const result = await response.json()


    return result
})
const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.pending, (state) => {
            state.loading = true;
            state.error = null
        })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.loading = false
                state.studentData = action.payload
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            })
            .addCase(fetchAuthStudent.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(fetchAuthStudent.fulfilled, (state, action) => {
                state.loading = false,
                state.studentData = action.payload
                state.error = null
            })

            .addCase(fetchAuthStudent.rejected,(state,action)=>{
                state.loading= false,
                state.error = action.payload
            })
    }
})

export default studentSlice.reducer