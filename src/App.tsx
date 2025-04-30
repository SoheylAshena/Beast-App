import FileSelector from './Components/FileSelector';
import Player from './Components/Player/Player';
import SongList from './Components/SongList/SongList';
import { useFileHandling } from './Hooks/useFileHandling';

export default function App() {
  const { songs } = useFileHandling();
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-5 bg-black">
      {songs.length === 0 ? (
        <FileSelector />
      ) : (
        <>
          <Player />
          <SongList />
        </>
      )}
    </div>
  );
}
