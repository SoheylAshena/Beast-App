import { useAudioControls } from "../../Hooks/useAudioControls";

interface PlayerControlsProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const PlayerControls = ({ audioRef }: PlayerControlsProps) => {
  const { isPlaying, togglePlayPause, playNext, playPrevious } =
    useAudioControls(audioRef);

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={togglePlayPause}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        onClick={playPrevious}
        className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
      >
        Previous
      </button>
      <button
        onClick={playNext}
        className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
      >
        Next
      </button>
    </div>
  );
};

export default PlayerControls;
