import type { SongListProps } from '../../types';
import SongItem from './SongItem';

function EmptySongList() {
  return <div className="animate-fade-in mt-6 w-full text-center text-cyan-300/80 italic">No songs available</div>;
}

export default function SongList({ songs }: SongListProps) {
  if (!songs || songs.length === 0) {
    return <EmptySongList />;
  }

  return (
    <section
      aria-label="Song list"
      className="animate-fade-in mt-6 max-h-[calc(100vh-200px)] w-full overflow-y-auto rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg"
    >
      <ul className="space-y-2">
        {songs.map((song, idx) => (
          <SongItem
            key={`${song.title}-${idx}`}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            index={idx}
          />
        ))}
      </ul>
    </section>
  );
}
