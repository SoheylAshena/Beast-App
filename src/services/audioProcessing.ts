import type { Song } from "../types";
import handleFilesSelected from "../Utilities/handleFilesSelected";
import { isAudioFile } from "../Utilities/isAudioFile";

export const processAudioFiles = async (files: File[]): Promise<Song[]> => {
  const audioFiles = files.filter(isAudioFile);
  return await handleFilesSelected(audioFiles);
};
