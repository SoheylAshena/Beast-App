import { IAudioMetadata, parseBlob } from "music-metadata";
import { Song } from "../types";
import { DEFAULT_ALBUM, DEFAULT_ARTIST } from "../constants";

export const extractSongMetadata = async (
  file: File
): Promise<Song | undefined> => {
  const createSongFromMetadata = (metadata: IAudioMetadata): Song => ({
    file,
    title: metadata.common.title?.trim() || file.name,
    artist: metadata.common.artist?.trim() || DEFAULT_ARTIST,
    album: metadata.common.album?.trim() || DEFAULT_ALBUM,
    duration: metadata.format.duration || 0,
  });

  try {
    const metadata = await parseBlob(file);
    return createSongFromMetadata(metadata);
  } catch (error) {
    console.error(`Error extracting metadata from ${file.name}:`, error);
    return undefined;
  }
};
