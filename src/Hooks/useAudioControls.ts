import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../types';
import { goToNextSong, goToPreviousSong } from '../Redux/Thunks/musicNavigationThunk';
import { useAudioRef } from '../Context/AudioRefContext/useAudioRef';

export const useAudioControls = () => {
  const audioRef = useAudioRef();
  const dispatch = useDispatch<AppDispatch>();
  const [isPlaying, setIsPlaying] = useState(false);

  const playNext = () => {
    dispatch(goToNextSong()); // Dispatch the thunk to go to the next song
  };

  const playPrevious = () => {
    dispatch(goToPreviousSong()); // Dispatch the thunk to go to the previous song
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && audio.paused) {
      audio.play();
    } else if (!isPlaying && !audio.paused) {
      audio.pause();
    }
  });

  return {
    isPlaying,
    togglePlayPause,
    playNext,
    playPrevious,
  };
};
