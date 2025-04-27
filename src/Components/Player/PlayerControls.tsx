const PlayerControls = ({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
}: {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) => (
  <div className="flex gap-4 mt-4">
    <button
      onClick={onPlayPause}
      className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
    >
      {isPlaying ? "Pause" : "Play"}
    </button>
    <button
      onClick={onPrevious}
      className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
    >
      Previous
    </button>
    <button
      onClick={onNext}
      className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
    >
      Next
    </button>
  </div>
);

export default PlayerControls;
