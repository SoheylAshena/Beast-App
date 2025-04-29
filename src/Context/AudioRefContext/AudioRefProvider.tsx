import { useRef, ReactNode } from 'react';
import { AudioRefContext } from './AudioRefContext';

export const AudioRefProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  return <AudioRefContext.Provider value={audioRef}>{children}</AudioRefContext.Provider>;
};
