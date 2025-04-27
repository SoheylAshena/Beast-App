import { useRef, useState, useEffect, useCallback } from "react";
import type { Song } from "../types";
import { useDispatch } from "react-redux";
import { setCurrentSongIndex } from "../Redux/Slices/currentSongSlice";

export const useAudioPlayer = (songs: Song[], currentSong: number | null) => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playNext = useCallback(() => {
    if (currentSong === null || songs.length === 0) return;
    const currentIndex = songs.findIndex(
      (song) => song.file === currentSong.file
    );
    const nextIndex = (currentIndex + 1) % songs.length;
    dispatch(setCurrentSongIndex(songs[nextIndex]));
  }, [currentSong, songs, dispatch]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      playNext();
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      setIsPlaying(false);
    };
  }, [playNext]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise) {
        playPromise.catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = useCallback(() => {
    if (!currentSong) return;
    setIsPlaying((prev) => !prev);
  }, [currentSong]);

  const playPrevious = useCallback(() => {
    if (currentSong === null || songs.length === 0) return;
    const currentIndex = songs.findIndex(
      (song) => song.file === currentSong.file
    );
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    dispatch(setCurrentSongIndex(songs[prevIndex]));
  }, [currentSong, songs, dispatch]);

  return {
    audioRef,
    isPlaying,
    togglePlayPause,
    playNext,
    playPrevious,
  };
};
