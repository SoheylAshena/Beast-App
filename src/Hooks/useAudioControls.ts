import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSongIndex } from "../Redux/Slices/currentSongSlice";
import type { RootState } from "../types";

export const useAudioControls = (
  audioRef: React.RefObject<HTMLAudioElement | null>
) => {
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSongIndex = useSelector(
    (state: RootState) => state.currentSongIndex
  );
  const songs = useSelector((state: RootState) => state.songs);

  const playNext = () => {
    if (currentSongIndex === null || songs.length === 0) return;
    const nextIndex = (currentSongIndex + 1) % songs.length;
    dispatch(setCurrentSongIndex(nextIndex));
  };

  const playPrevious = () => {
    if (currentSongIndex === null || songs.length === 0) return;
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    dispatch(setCurrentSongIndex(prevIndex));
  };

  const togglePlayPause = () => {
    if (!currentSongIndex) return;
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
  }, [isPlaying, currentSongIndex, audioRef]);

  return {
    isPlaying,
    togglePlayPause,
    playNext,
    playPrevious,
  };
};
