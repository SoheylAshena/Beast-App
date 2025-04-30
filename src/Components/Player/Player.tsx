import PlayerControls from './PlayerControls';
import SongInfo from './SongInfo';
import { useAudioPlayer } from '../../Hooks/useAudioPlayer';

const Player = () => {
  const { audioRef, url } = useAudioPlayer();

  if (!url)
    return (
      <div className="animate-fade-in flex h-[calc(100vh-200px)] w-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
        <h1 className="text-cyan-400">select a song</h1>
      </div>
    );

  return (
    <div className="animate-fade-in flex h-[calc(100vh-200px)] w-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
      <audio ref={audioRef} src={url} />
      <SongInfo />
      <PlayerControls />
    </div>
  );
};

export default Player;
