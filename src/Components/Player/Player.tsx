// Player.tsx
import type { PlayerProps } from "../../types";
import { useAudioPlayer } from "../../Hooks/useAudioPlayer";
import PlayerControls from "./PlayerControls";
import SongInfo from "./SongInfo";
import { useSelector } from "react-redux";

import { RootState } from "../../types";

export default function Player({ songs }: PlayerProps) {
  const currentSongIndex = useSelector(
    (state: RootState) => state.currentSongIndex
  );

  const { audioRef, isPlaying, togglePlayPause, playNext, playPrevious } =
    useAudioPlayer(songs, currentSongIndex);

  //Return early if no song is selected
  // This is to prevent the audio element from being created if no song is selected
  if (currentSongIndex === null) {
    return (
      <div className="p-4 flex flex-col items-center w-full">
        <p className="text-gray-400">Select a song to play</p>
      </div>
    );
  }

  const currentSong = songs[currentSongIndex];

  return (
    <div className="p-4 flex flex-col items-center w-full">
      <SongInfo title={currentSong.title} artist={currentSong.artist} />

      <audio
        ref={audioRef}
        src={URL.createObjectURL(currentSong.file)}
        onEnded={playNext}
      />

      <PlayerControls
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        onPrevious={playPrevious}
        onNext={playNext}
      />
    </div>
  );
}
