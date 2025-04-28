import type { Song } from '../types';
import { ERROR_MESSAGES } from '../constants';
import { extractSongMetadata } from './extractSongMetadata';
import { isAudioFile } from '../Utilities/isAudioFile';

const handleFilesSelected = async (files: File[]): Promise<Song[]> => {
  const audioFiles = files.filter(isAudioFile);

  if (audioFiles.length === 0) {
    throw new Error(ERROR_MESSAGES.NO_AUDIO_FILES);
  }

  const results = await Promise.allSettled(audioFiles.map((file) => extractSongMetadata(file)));

  const songs = results
    .filter((result): result is PromiseFulfilledResult<Song | undefined> => result.status === 'fulfilled')
    .map((result) => result.value)
    .filter((song): song is Song => song !== undefined);

  if (songs.length === 0) {
    throw new Error(ERROR_MESSAGES.FAILED_PROCESS);
  }

  console.log(songs);

  return songs;
};

export default handleFilesSelected;
