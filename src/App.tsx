import { useDispatch, useSelector } from 'react-redux';
import FileSelector from './Components/FileSelector';
import Player from './Components/Player/Player';
import SongList from './Components/SongList/SongList';
import { RootState } from './types';
import { useEffect, useState } from 'react';
import { clearDatabase, loadSongsFromIndexedDB } from './services/DataBase';
import { setSongs } from './Redux/Slices/songsSlice';

export default function App() {
  const [isCheckingDB, setIsCheckingDB] = useState(true);
  const songs = useSelector((state: RootState) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSongs = async () => {
      if (songs.length === 0) {
        try {
          const dbSongs = await loadSongsFromIndexedDB();
          if (dbSongs.length > 0) {
            dispatch(setSongs(dbSongs));
          }
        } catch (error) {
          console.error('Failed to load songs from database:', error);
        }
      }
      setIsCheckingDB(false);
    };

    loadSongs();
  }, [songs.length, dispatch]);

  if (isCheckingDB) {
    return null;
  }

  if (songs.length === 0) {
    return (
      <div className="flex h-screen w-screen items-center justify-center gap-5 bg-black">
        <FileSelector />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center gap-5 bg-black max-md:flex-col">
      <button
        onClick={async () => {
          await clearDatabase();
          dispatch(setSongs([]));
        }}
        className="w-44 rounded-sm bg-white p-2"
      >
        clear
      </button>
      <Player />
      <SongList />
    </div>
  );
}
