import { useSelector } from 'react-redux';
import SongItem from './SongItem';
import { RootState } from '../../types';

const SongList = () => {
  const songs = useSelector((state: RootState) => state.songs);

  return (
    <section
      aria-label="Song list"
      className="animate-fade-in scrollbar-none h-[calc(100vh-200px)] w-full overflow-y-auto rounded-2xl border border-white/20 bg-white/5 p-4 shadow-lg"
    >
      <ul className="space-y-2">
        {songs.map((song, idx) => (
          <SongItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            id={song.id}
            index={idx}
          />
        ))}
      </ul>
    </section>
  );
};

export default SongList;
