import { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSongIndex } from '../Redux/Slices/currentSongSlice';
import type { RootState } from '../types';
import { useAudioRef } from '../Context/AudioRefContext/useAudioRef';

export const useAudioControls = () => {
  const audioRef = useAudioRef();
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSongIndex = useSelector((state: RootState) => state.currentSongIndex);
  const songsLength = useSelector((state: RootState) => state.songs.length);

  const playNext = useCallback(() => {
    if (currentSongIndex === null || songsLength === 0) return;
    const nextIndex = (currentSongIndex + 1) % songsLength;
    dispatch(setCurrentSongIndex(nextIndex));
  }, [currentSongIndex, songsLength, dispatch]);

  const playPrevious = useCallback(() => {
    if (currentSongIndex === null || songsLength === 0) return;
    const prevIndex = (currentSongIndex - 1 + songsLength) % songsLength;
    dispatch(setCurrentSongIndex(prevIndex));
  }, [currentSongIndex, songsLength, dispatch]);

  const togglePlayPause = useCallback(() => {
    if (!currentSongIndex) return;
    setIsPlaying((prev) => !prev);
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSongIndex, audioRef]);

  return useMemo(
    () => ({
      isPlaying,
      togglePlayPause,
      playNext,
      playPrevious,
    }),
    [isPlaying, togglePlayPause, playNext, playPrevious],
  );
};
