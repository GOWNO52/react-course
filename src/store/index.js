import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import postReducer from './postsSlice.js';
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    posts:postReducer,
  },
});
