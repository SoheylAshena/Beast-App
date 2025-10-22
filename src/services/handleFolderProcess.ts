import { ERROR_MESSAGES } from '../constants';
import { Song } from '../types';
import { isAudioFile } from '../Utilities/isAudioFile';
import { saveSongImage, saveSongMetadata } from './DataBase';
import { extractSongMetadata } from './extractSongMetadata';
import { validateSongs } from './validateSongs';

export const handleFolderProcess = async (files: File[]) => {
  try {
    const songs = await handleFilesSelected(files);

    const results = await Promise.all(
      songs.map(async (song) => {
        const { picture, ...metadata } = song;
        const savedMetadata = await saveSongMetadata(metadata);
        if (picture) {
          await saveSongImage(song.id, picture.data, picture.format);
        }
        return savedMetadata;
      }),
    );
    return results;
  } catch (error) {
    console.error('Failed to process audio files:', error);
    throw error;
  }
};

const handleFilesSelected = async (files: File[]): Promise<Song[]> => {
  const audioFiles = files.filter(isAudioFile);

  if (audioFiles.length === 0) {
    throw new Error(ERROR_MESSAGES.NO_AUDIO_FILES);
  }

  const results = await Promise.allSettled(audioFiles.map((file) => extractSongMetadata(file)));

  return validateSongs(results);
};
