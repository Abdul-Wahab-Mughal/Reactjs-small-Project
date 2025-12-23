import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../Pages/TodoList/slices/todoslice";

import { counterReducer } from "../Pages/Counter/Redux/counterReducer";

export const store = configureStore({
  reducer: {
    // todo reducer
    todo: todoReducer,

    // counter reducer
    counter: counterReducer,
  },
});
