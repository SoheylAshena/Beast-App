import { configureStore } from "@reduxjs/toolkit";
import songs from "./Slices/songsSlice";
import currentSongIndex from "./Slices/currentSongSlice";

const store = configureStore({
  reducer: { songs, currentSongIndex },
});

export default store;
