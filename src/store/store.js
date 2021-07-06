import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from './reducers';

export const store = configureStore({
    reducer: albumsReducer,
})