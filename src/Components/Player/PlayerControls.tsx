import { useAudioControls } from '../../Hooks/useAudioControls';
import { PlayerControlsProps } from '../../types';
import { useEffect, useState } from 'react';

const PlayerControls = ({ audioRef }: PlayerControlsProps) => {
  const { isPlaying, togglePlayPause, playNext, playPrevious } = useAudioControls(audioRef);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [audioRef]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume > 0 && isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const changePlaybackRate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rate = Number(e.target.value);
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
      setIsLooping(!isLooping);
    }
  };

  return (
    <div className="flex w-full flex-col items-center space-y-6">
      {/* Top Controls: Play, Previous, Next */}
      <div className="flex gap-4">
        <button onClick={playPrevious} className="rounded bg-gray-600 px-4 py-2 hover:bg-gray-700">
          ◀ Prev
        </button>

        <button onClick={togglePlayPause} className="rounded bg-blue-600 px-6 py-2 text-lg font-bold hover:bg-blue-700">
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>

        <button onClick={playNext} className="rounded bg-gray-600 px-4 py-2 hover:bg-gray-700">
          Next ▶
        </button>
      </div>

      {/* Seek Bar */}
      <div className="flex w-full items-center space-x-2">
        <span className="w-10 text-right text-sm text-gray-500">{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full accent-blue-500"
        />

        <span className="w-10 text-sm text-gray-500">{formatTime(duration)}</span>
      </div>

      {/* Volume and Mute */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleMute} className="rounded bg-gray-600 px-3 py-2 hover:bg-gray-700">
          {isMuted || volume === 0 ? '🔇' : '🔊'}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-32 accent-green-500"
        />
      </div>

      {/* Playback Rate and Loop */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-600">Speed:</label>
          <select
            value={playbackRate}
            onChange={changePlaybackRate}
            className="rounded border border-gray-400 p-1 text-sm"
          >
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>

        <button
          onClick={toggleLoop}
          className={`rounded px-4 py-2 ${isLooping ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 hover:bg-gray-700'}`}
        >
          {isLooping ? '🔁 Looping' : 'Loop'}
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;

// Utility function
function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${seconds}`;
}
