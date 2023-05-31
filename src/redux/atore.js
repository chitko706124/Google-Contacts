import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";
import { contentApi } from "./api/contentApi";
import search from "./services/search";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contentApi.reducerPath]: contentApi.reducer,

    authSlice: authSlice,
    search: search,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, contentApi.middleware),
});
