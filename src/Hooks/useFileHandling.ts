import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { setSongs } from '../Redux/Slices/songsSlice';
import { loadSongsFromIndexedDB } from '../services/DataBase';
import { useEffect } from 'react';

export const useFileHandling = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs);

  //This will load the data from DataBase and dispatch it to a redux Store
  useEffect(() => {
    const loadSongs = async () => {
      const savedSongs = await loadSongsFromIndexedDB();
      dispatch(setSongs(savedSongs));
    };
    loadSongs();
  }, [dispatch]);

  return { songs };
};
