import { useVolumeAndMute } from '../../Hooks/useVolumeAndMute';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const VolumeAndMute = () => {
  const { volume, isMuted, handleVolumeChange, toggleMute } = useVolumeAndMute();

  return (
    <div className="flex items-center space-x-4">
      <button onClick={toggleMute} className="text-3xl text-cyan-400">
        {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="h-2 w-32 appearance-none rounded-lg bg-gray-800/60 accent-cyan-400 shadow-inner focus:ring-2 focus:outline-none"
      />
    </div>
  );
};

export default VolumeAndMute;
