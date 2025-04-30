import { saveSongImage, saveSongMetadata } from './DataBase';
import { handleFilesSelected } from './handleFilesSelected';

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
