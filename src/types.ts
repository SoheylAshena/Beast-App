declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
    directory?: string;
  }
}

export interface Song {
  file: File;
  title: string;
  artist: string;
  album: string;
  duration: number;
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
  title: string;
  artist: string;
  duration: number;
  index: number;
}

export interface RootState {
  songs: Song[];
  currentSongIndex: number | null;
}
