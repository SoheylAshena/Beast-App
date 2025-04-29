import { handleFilesSelected } from './handleFilesSelected';
import { saveSongImage, saveSongMetadata } from './DataBase';

export const handleFolderProcess = async (files: File[]) => {
  try {
    const songs = await handleFilesSelected(files);
    await Promise.all(
      songs.map(async (song) => {
        const { picture, ...metadata } = song;
        await saveSongMetadata(metadata);
        if (picture) {
          await saveSongImage(song.id, picture.data, picture.format);
        }
      }),
    );
  } catch (error) {
    console.error('Failed to process audio files:', error);
    throw error;
  }
};
