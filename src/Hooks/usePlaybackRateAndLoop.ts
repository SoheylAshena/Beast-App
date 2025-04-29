import { useState } from 'react';
import { useAudioRef } from '../Context/AudioRefContext/useAudioRef';

export const usePlaybackRateAndLoop = () => {
  const audioRef = useAudioRef();
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLooping, setIsLooping] = useState(false);

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

  return {
    playbackRate,
    changePlaybackRate,
    isLooping,
    toggleLoop,
  };
};
