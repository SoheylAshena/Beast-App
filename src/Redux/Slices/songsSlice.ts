import { createSlice } from '@reduxjs/toolkit';
import { Song } from '../../types';

const initialState: Song[] = [];

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setSongs: (_state, action) => {
      return action.payload as Song[];
    },
  },
});

export const { setSongs } = songsSlice.actions;
export default songsSlice.reducer;
