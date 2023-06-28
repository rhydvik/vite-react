import { configureStore } from "@reduxjs/toolkit";

import { StatusReducer } from "./reducers";

const store = configureStore({
  reducer: {
    Status: StatusReducer
  }
})

export type AppDispatch = typeof store.dispatch

export default store
