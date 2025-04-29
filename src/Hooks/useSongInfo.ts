import { useSelector } from 'react-redux';
import store from '../Redux/store';

export type RootState = ReturnType<typeof store.getState>;

export const useSongInfo = () => {
  const songs = useSelector((state: RootState) => state.songs);
  const currentSongIndex = useSelector((state: RootState) => state.currentSongIndex);

  const currentSong = currentSongIndex !== null ? songs[currentSongIndex] : null;

  return { currentSong };
};
