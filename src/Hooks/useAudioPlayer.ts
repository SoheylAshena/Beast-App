import { useSelector } from 'react-redux';
import { useAudioRef } from '../Context/AudioRefContext/useAudioRef';
import { RootState } from '../types';

export const useAudioPlayer = () => {
  const audioRef = useAudioRef();
  const songs = useSelector((state: RootState) => state.songs);
  const currentSongIndex = useSelector((state: RootState) => state.currentSongIndex);

  if (currentSongIndex === null || songs.length === 0) {
    return { audioRef, url: null, currentSong: null };
  }
  const currentSong = songs[currentSongIndex];
  const url = currentSong ? URL.createObjectURL(currentSong.file) : null;
  return {
    audioRef,
    url,
  };
};
