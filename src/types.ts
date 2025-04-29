import { IPicture } from 'music-metadata';
import store from './Redux/store';

declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
    directory?: string;
  }
}

export type RootState = ReturnType<typeof store.getState>;

export interface Song {
  id: string;
  file: File;
  title: string;
  artist: string;
  album: string;
  duration: number;
  picture: IPicture | null;
}

export interface FileSelectorProps {
  onFilesSelected: (files: File[]) => void;
}

export interface PlayerProps {
  songs: Song[];
}

export interface SongListProps {
  songs: Song[];
}

export interface FileProcessingResult {
  success: boolean;
  songs?: Song[];
  error?: string;
}

export interface SongItemProps {
  id: string;
  title: string;
  artist: string;
  duration: number;
  index: number;
}

export interface PlayerControlsProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}
