import type { Song } from "../types";
import { ERROR_MESSAGES } from "../constants";
import { extractSongMetadata } from "./extractSongMetadata";

const handleFilesSelected = async (files: File[]): Promise<Song[]> => {
  if (files.length === 0) {
    throw new Error(ERROR_MESSAGES.NO_AUDIO_FILES);
  }

  const results = await Promise.allSettled(
    files.map((file) => extractSongMetadata(file))
  );

  const songs = results
    .filter(
      (result): result is PromiseFulfilledResult<Song | undefined> =>
        result.status === "fulfilled"
    )
    .map((result) => result.value)
    .filter((song): song is Song => song !== undefined);

  if (songs.length === 0) {
    throw new Error(ERROR_MESSAGES.FAILED_PROCESS);
  }

  return songs;
};

export default handleFilesSelected;
