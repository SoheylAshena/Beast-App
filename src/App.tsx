import FileSelector from './Components/FileSelector';
import Player from './Components/Player/Player';
import SongList from './Components/SongList/SongList';

export default function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-5 bg-black">
      <FileSelector />
      <Player />
      <SongList />
    </div>
  );
}
