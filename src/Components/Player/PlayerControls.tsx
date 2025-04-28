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
    <div className="animate-fade-in mt-6 flex w-full flex-col items-center space-y-8">
      {/* Top Controls: Play, Previous, Next */}
      <div className="flex gap-6">
        <button
          onClick={playPrevious}
          className="drop-shadow-glow rounded-full bg-gradient-to-tr from-fuchsia-700 via-cyan-700 to-blue-700 px-5 py-3 text-xl text-white shadow-lg transition-transform hover:scale-105 hover:from-fuchsia-500 hover:to-blue-500"
        >
          ◀
        </button>

        <button
          onClick={togglePlayPause}
          className="drop-shadow-glow rounded-full border-4 border-white/10 bg-gradient-to-tr from-fuchsia-400 via-cyan-400 to-blue-400 px-8 py-4 text-2xl font-extrabold text-white shadow-xl transition-transform hover:scale-110"
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <button
          onClick={playNext}
          className="drop-shadow-glow rounded-full bg-gradient-to-tr from-fuchsia-700 via-cyan-700 to-blue-700 px-5 py-3 text-xl text-white shadow-lg transition-transform hover:scale-105 hover:from-fuchsia-500 hover:to-blue-500"
        >
          ▶
        </button>
      </div>

      {/* Seek Bar */}
      <div className="flex w-full items-center space-x-3">
        <span className="w-12 text-right font-mono text-sm text-cyan-200">{formatTime(currentTime)}</span>

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="h-2 w-full appearance-none rounded-lg bg-gray-800/60 accent-fuchsia-400 shadow-inner focus:ring-2 focus:ring-fuchsia-400 focus:outline-none"
        />

        <span className="w-12 font-mono text-sm text-cyan-200">{formatTime(duration)}</span>
      </div>

      {/* Volume and Mute */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleMute}
          className="rounded-full bg-gradient-to-tr from-cyan-700 to-fuchsia-700 px-3 py-2 text-lg text-white shadow transition-transform hover:scale-110"
        >
          {isMuted || volume === 0 ? '🔇' : '🔊'}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="h-2 w-32 appearance-none rounded-lg bg-gray-800/60 accent-cyan-400 shadow-inner focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        />
      </div>

      {/* Playback Rate and Loop */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <label className="text-sm text-cyan-200">Speed:</label>
          <select
            value={playbackRate}
            onChange={changePlaybackRate}
            className="rounded-lg border border-cyan-400 bg-gray-900/80 p-1 text-sm text-cyan-200 focus:ring-2 focus:ring-cyan-400"
          >
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>

        <button
          onClick={toggleLoop}
          className={`rounded-full border-2 px-5 py-2 text-lg font-bold shadow transition-all ${isLooping ? 'scale-110 border-fuchsia-400 bg-gradient-to-tr from-fuchsia-500 to-cyan-500 text-white' : 'border-cyan-400 bg-gray-800/80 text-cyan-200 hover:scale-105'}`}
        >
          {isLooping ? '🔁' : 'Loop'}
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
