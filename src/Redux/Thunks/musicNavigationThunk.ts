import { AppDispatch, RootState } from '../../types';
import { setCurrentSongIndex } from '../Slices/currentSongSlice';

export const goToNextSong = () => (dispatch: AppDispatch, getState: () => RootState) => {
  const { currentSongIndex, songs } = getState();
  const total = songs.length;

  if (total === 0) return;

  const nextIndex = (currentSongIndex + 1) % total;
  dispatch(setCurrentSongIndex(nextIndex));
};

export const goToPreviousSong = () => (dispatch: AppDispatch, getState: () => RootState) => {
  const { currentSongIndex, songs } = getState();
  const total = songs.length;

  if (total === 0) return;

  const prevIndex = currentSongIndex === 0 ? total - 1 : currentSongIndex - 1;
  dispatch(setCurrentSongIndex(prevIndex));
};
