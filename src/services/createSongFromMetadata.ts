import { IAudioMetadata } from 'music-metadata';
import { Song } from '../types';
import { DEFAULT_ALBUM, DEFAULT_ARTIST } from '../constants';

export const createSongFromMetadata = (metadata: IAudioMetadata, file: File): Song => ({
  file,
  title: metadata.common.title?.trim() || file.name,
  artist: metadata.common.artist?.trim() || DEFAULT_ARTIST,
  album: metadata.common.album?.trim() || DEFAULT_ALBUM,
  duration: metadata.format.duration || 0,
  picture: metadata.common.picture?.[0] || null,
});
