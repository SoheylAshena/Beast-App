import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CurrentSongState = number;

const initialState: CurrentSongState = 0;

const currentSongSlice = createSlice({
  name: 'currentSongIndex',
  initialState,
  reducers: {
    setCurrentSongIndex: (_state, action: PayloadAction<number>) => {
      return action.payload;
    },
    clearCurrentSongIndex: () => {
      return 0;
    },
  },
});

export const { setCurrentSongIndex, clearCurrentSongIndex } = currentSongSlice.actions;
export default currentSongSlice.reducer;
