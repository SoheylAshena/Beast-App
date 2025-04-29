import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAudioRef } from '../Context/AudioRefContext/useAudioRef';
import { goToNextIndex, goToPreviousIndex } from '../Redux/Slices/currentSongSlice';

export const useAudioControls = () => {
  const audioRef = useAudioRef();
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);

  const playNext = () => {
    dispatch(goToNextIndex());
  };

  const playPrevious = () => {
    dispatch(goToPreviousIndex());
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audioRef]);

  return {
    isPlaying,
    togglePlayPause,
    playNext,
    playPrevious,
  };
};
