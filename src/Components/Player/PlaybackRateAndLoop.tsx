import { usePlaybackRateAndLoop } from '../../Hooks/usePlaybackRateAndLoop';
import { TbRepeatOff, TbRepeatOnce } from 'react-icons/tb';

const PlaybackRateAndLoop = () => {
  const { playbackRate, changePlaybackRate, isLooping, toggleLoop } = usePlaybackRateAndLoop();

  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <select
          value={playbackRate}
          onChange={changePlaybackRate}
          className="rounded-lg border border-cyan-400 bg-gray-900/80 p-1 text-sm text-cyan-200 outline-0"
        >
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>

      <button onClick={toggleLoop} className="text-3xl text-cyan-400">
        {isLooping ? <TbRepeatOnce /> : <TbRepeatOff />}
      </button>
    </div>
  );
};

export default PlaybackRateAndLoop;
