import { useContext } from 'react';
import { AudioRefContext } from './AudioRefContext';

export const useAudioRef = () => {
  const context = useContext(AudioRefContext);
  if (context === null) {
    throw new Error('useAudioRef must be used within an AudioRefProvider');
  }
  return context;
};
