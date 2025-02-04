import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    authData: [],
    loading: false,
    error: null,
};

// export const authLogin = createAsyncThunk("/auth/login", async (formData, { rejectWithValue }) => {
//     try {
//         const response = await fetch("http://localhost:5000/api/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//             },
//             body: JSON.stringify(formData),
//         });

//         if (!response.ok) {
//             const error = await response.json();
//             return rejectWithValue(error);
//         }

//         const result = await response.json();
//         return result;
//     } catch (error) {
//         return rejectWithValue(error.message);
//     }
// });
const BASE_API_URL=(import.meta.env.VITE_API_URL);
export const fetchAuth = createAsyncThunk("/get/auth", async ({ id }) => {
    try {
        const response = await fetch(`${BASE_API_URL}/api/auth/get/auth/${id}`);

       console.log("fetch")
       
        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        return (error.message);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.authData = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(authLogin.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            // .addCase(authLogin.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.authData = action.payload;
            //     localStorage.setItem("token", action.payload.token);
            // })
            // .addCase(authLogin.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // })
            .addCase(fetchAuth.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.loading = false;
                state.authData = action.payload;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(fetchAuth.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;