import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState, Song } from "../types";

export const useAudioPlayer = (songs: Song[]) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSongIndex = useSelector(
    (state: RootState) => state.currentSongIndex
  );

  if (currentSongIndex === null) {
    return;
  }
  const currentSong = songs[currentSongIndex];

  return {
    audioRef,
    currentSong,
    currentSongIndex,
  };
};
