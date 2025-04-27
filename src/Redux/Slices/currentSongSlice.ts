import { createSlice } from "@reduxjs/toolkit";

type CurrentSongState = number | null;

const initialState: CurrentSongState = null;

const currentSongSlice = createSlice({
  name: "currentSongIndex",
  initialState,
  reducers: {
    setCurrentSongIndex: (_state, action) => {
      return action.payload;
    },
    clearCurrentSongIndex: () => {
      return null;
    },
  },
});

export const { setCurrentSongIndex, clearCurrentSongIndex } =
  currentSongSlice.actions;

export default currentSongSlice.reducer;
