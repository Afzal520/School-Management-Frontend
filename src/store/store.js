import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../feature/studentSlice.js';
import teacherReducer from '../feature/teacher.js';
import authReducer from "../feature/authSlice.js"
import resultReducer from "../feature/resultSlice.js"
const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
    teacher: teacherReducer,
    result: resultReducer
  },
});

export default store;
