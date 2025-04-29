import React, { useState } from 'react';
import { useAudioRef } from '../Context/AudioRefContext/useAudioRef';

export const useVolumeAndMute = () => {
  const audioRef = useAudioRef();

  const [volume, setVolume] = useState(1);

  const [isMuted, setIsMuted] = useState(false);

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

  return { volume, isMuted, handleVolumeChange, toggleMute };
};
