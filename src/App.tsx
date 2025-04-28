import FileSelector from './Components/FileSelector';
import Player from './Components/Player/Player';
import SongList from './Components/SongList/SongList';
import useSongs from './Hooks/useSongs';

export default function App() {
  const { songs } = useSongs();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1a2980] p-0 text-white dark:bg-gradient-to-br dark:from-[#0f2027] dark:via-[#2c5364] dark:to-[#1a2980]">
      {/* Animated stars background */}
      <div className="pointer-events-none absolute inset-0 z-0 animate-pulse bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/60 via-purple-900/40 to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-700/30 via-transparent to-transparent opacity-60" />
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-8">
        <FileSelector />
        <div className="flex w-full flex-col items-start justify-center gap-8 md:flex-row">
          <Player songs={songs} />
          <SongList songs={songs} />
        </div>
      </div>
    </div>
  );
}
