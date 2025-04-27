import FileSelector from "./Components/FileSelector";
import Player from "./Components/Player/Player";
import SongList from "./Components/SongList/SongList";
import useSongs from "./Hooks/useSongs";

export default function App() {
  const { songs } = useSongs();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <FileSelector />
      <div className="flex">
        <Player songs={songs} />
        <SongList songs={songs} />
      </div>
    </div>
  );
}
