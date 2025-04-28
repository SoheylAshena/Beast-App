// Player.tsx
import type { PlayerProps } from '../../types';
import PlayerControls from './PlayerControls';
import SongInfo from './SongInfo';
import { useAudioPlayer } from '../../Hooks/useAudioPlayer';

export default function Player({ songs }: PlayerProps) {
  const result = useAudioPlayer(songs);

  if (!result || result.currentSongIndex === null) {
    return (
      <div className="animate-fade-in flex min-h-[350px] w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
        <p className="drop-shadow-glow text-lg font-semibold text-fuchsia-300">Select a song to play</p>
      </div>
    );
  }

  const { audioRef, currentSong } = result;

  return (
    <div className="animate-fade-in flex min-h-[350px] w-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
      <SongInfo
        title={currentSong.title}
        artist={currentSong.artist}
        picture={currentSong.picture}
        album={currentSong.album}
      />

      <audio ref={audioRef} src={URL.createObjectURL(currentSong.file)} />

      <PlayerControls audioRef={audioRef} />
    </div>
  );
}
