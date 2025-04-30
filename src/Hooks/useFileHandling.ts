import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../types';
import { useEffect } from 'react';
import { loadSongsFromIndexedDB } from '../services/DataBase';
import { setSongs } from '../Redux/Slices/songsSlice';

export const useFileHandling = () => {
  const songs = useSelector((state: RootState) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (songs.length === 0) {
      const loadSongs = async () => {
        try {
          const dbSongs = await loadSongsFromIndexedDB();
          if (dbSongs.length > 0) {
            dispatch(setSongs(dbSongs));
          }
        } catch (error) {
          console.error('Failed to load songs from database:', error);
        }
      };
      loadSongs();
    }
  }, [songs.length, dispatch]);

  return { songs };
};
