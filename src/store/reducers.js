import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    albums: []
}

export const AlbumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
        setAlbums: (state, action) => {
            return{
                ...state,
                albums: action.payload
            }
        }
    }
})

export const {
    setAlbums
} = AlbumSlice.actions;

export default AlbumSlice.reducer