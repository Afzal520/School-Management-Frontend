import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../feature/studentSlice.js';
import teacherReducer from '../feature/teacher.js';
import authReducer from "../feature/authSlice.js"
const store = configureStore({
  reducer: {
    auth:authReducer,
    student: studentReducer,
    teacher:teacherReducer
  },
});

export default store;
