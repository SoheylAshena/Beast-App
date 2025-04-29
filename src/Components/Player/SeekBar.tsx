import { useSeekBar } from '../../Hooks/useSeekBar';
import { formatDuration } from '../../Utilities/formatDuration';

const SeekBar = () => {
  const { currentTime, duration, handleSeek } = useSeekBar();

  const formattedCurrentTime = formatDuration(currentTime);
  const formattedDuration = formatDuration(duration);

  return (
    <div className="flex w-full items-center space-x-3">
      <span className="w-12 text-right font-mono text-sm text-cyan-200">{formattedCurrentTime}</span>

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="h-2 w-full appearance-none rounded-lg bg-blue-800/30 accent-fuchsia-400 shadow-inner focus:outline-none"
      />

      <span className="w-12 font-mono text-sm text-cyan-200">{formattedDuration}</span>
    </div>
  );
};

export default SeekBar;
