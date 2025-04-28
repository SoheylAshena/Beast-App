// Player.tsx
import type { PlayerProps } from '../../types';
import PlayerControls from './PlayerControls';
import SongInfo from './SongInfo';
import { useAudioPlayer } from '../../Hooks/useAudioPlayer';

export default function Player({ songs }: PlayerProps) {
  const result = useAudioPlayer(songs);

  if (!result || result.currentSongIndex === null) {
    return (
      <div className="flex w-full flex-col items-center p-4">
        <p className="text-gray-400">Select a song to play</p>
      </div>
    );
  }

  const { audioRef, currentSong } = result;

  return (
    <div className="flex w-full flex-col items-center p-4">
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
