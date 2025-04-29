import { openDB } from 'idb';
import { Song } from '../types';

const DB_NAME = 'music-db';
const DB_VERSION = 1;
const SONGS_STORE = 'songs-store';
const IMAGES_STORE = 'images-store';

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(SONGS_STORE, { keyPath: 'id' });
    db.createObjectStore(IMAGES_STORE);
  },
});

export async function saveSongMetadata(song: Omit<Song, 'picture'>) {
  const db = await dbPromise;
  await db.put(SONGS_STORE, song);
}

export async function saveSongImage(id: string, data: Uint8Array, format: string) {
  const db = await dbPromise;
  await db.put(IMAGES_STORE, { data, format }, id);
}

export async function getSongImageBlobUrl(id: string): Promise<string | null> {
  const db = await dbPromise;
  const imageRecord = await db.get(IMAGES_STORE, id);

  if (!imageRecord) return null;

  const { data, format } = imageRecord as { data: Uint8Array; format: string };
  const blob = new Blob([data], { type: format });
  return URL.createObjectURL(blob);
}

export async function loadSongsFromIndexedDB(): Promise<Song[]> {
  const db = await openDB(DB_NAME, 1);
  return await db.getAll(SONGS_STORE);
}
