import { IAudioMetadata } from 'music-metadata';
import { Song } from '../types';
import { DEFAULT_ALBUM, DEFAULT_ARTIST } from '../constants';

function generateSongId(metadata: IAudioMetadata, file: File): string {
  const title = metadata.common.title?.trim() || file.name;
  const artist = metadata.common.artist?.trim() || DEFAULT_ARTIST;
  const album = metadata.common.album?.trim() || DEFAULT_ALBUM;
  return `${artist}-${album}-${title}-${file.name}`.replace(/\s+/g, '_').toLowerCase();
}

export const createSongFromMetadata = (metadata: IAudioMetadata, file: File): Song => {
  return {
    file,
    id: generateSongId(metadata, file),
    title: metadata.common.title?.trim() || file.name,
    artist: metadata.common.artist?.trim() || DEFAULT_ARTIST,
    album: metadata.common.album?.trim() || DEFAULT_ALBUM,
    duration: metadata.format.duration || 0,
    picture: metadata.common.picture?.[0] || null,
  };
};
