import type { Song } from '../types';
import { ERROR_MESSAGES } from '../constants';
import { extractSongMetadata } from './extractSongMetadata';
import { isAudioFile } from '../Utilities/isAudioFile';
import { validateSongs } from './validateSongs';

export const handleFilesSelected = async (files: File[]): Promise<Song[]> => {
  const audioFiles = files.filter(isAudioFile);

  if (audioFiles.length === 0) {
    throw new Error(ERROR_MESSAGES.NO_AUDIO_FILES);
  }

  const results = await Promise.allSettled(audioFiles.map((file) => extractSongMetadata(file)));

  return validateSongs(results);
};
