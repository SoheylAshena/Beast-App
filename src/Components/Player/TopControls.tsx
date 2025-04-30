import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useAudioControls } from '../../Hooks/useAudioControls';
import { FaPause, FaPlay } from 'react-icons/fa';

const TopControls = () => {
  const { isPlaying, togglePlayPause, playNext, playPrevious } = useAudioControls();

  return (
    <div className="flex gap-6">
      <button
        onClick={playPrevious}
        className="drop-shadow-glow rounded-full bg-gradient-to-tr from-fuchsia-400 via-cyan-400 to-blue-400 px-5 py-3 text-xl text-white transition-transform hover:scale-105"
      >
        <MdNavigateBefore color="black" />
      </button>

      <button
        onClick={togglePlayPause}
        className="drop-shadow-glow rounded-full bg-gradient-to-tr from-fuchsia-400 via-cyan-400 to-blue-400 px-10 py-4 text-2xl font-extrabold text-white shadow-xl transition-transform hover:scale-110"
      >
        {isPlaying ? <FaPause color="black" /> : <FaPlay color="black" />}
      </button>

      <button
        onClick={playNext}
        className="drop-shadow-glow rounded-full bg-gradient-to-tr from-fuchsia-400 via-cyan-400 to-blue-400 px-5 py-3 text-xl text-white transition-transform hover:scale-105"
      >
        <MdNavigateNext color="black" />
      </button>
    </div>
  );
};

export default TopControls;
