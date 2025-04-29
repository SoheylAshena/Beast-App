import { createSlice } from '@reduxjs/toolkit';

type CurrentSongState = number;

const initialState: CurrentSongState = 1;

const currentSongSlice = createSlice({
  name: 'currentSongIndex',
  initialState,
  reducers: {
    setCurrentSongIndex: (_state, action) => {
      return action.payload;
    },
    goToNextIndex: (state) => {
      if (state !== null) {
        return state + 1;
      }
    },
    goToPreviousIndex: (state) => {
      if (state !== null) {
        return state - 1;
      }
    },

    clearCurrentSongIndex: () => {
      return 0;
    },
  },
});

export const { setCurrentSongIndex, clearCurrentSongIndex, goToNextIndex, goToPreviousIndex } =
  currentSongSlice.actions;

export default currentSongSlice.reducer;
