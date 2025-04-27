import { createSlice } from "@reduxjs/toolkit";

import { Song } from "../../types";

const initialState: Song[] = [];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSongs: (state, action) => {
      const newSongs = action.payload as Song[];
      return [...state, ...newSongs];
    },
  },
});

export const { addSongs } = songsSlice.actions;

export default songsSlice.reducer;
