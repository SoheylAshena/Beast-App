import type { SongListProps } from "../../types";
import SongItem from "./SongItem";

function EmptySongList() {
  return (
    <div className="mt-6 w-full text-center text-gray-400">
      No songs available
    </div>
  );
}

export default function SongList({ songs }: SongListProps) {
  if (!songs || songs.length === 0) {
    return <EmptySongList />;
  }

  return (
    <section
      aria-label="Song list"
      className="mt-6 w-full max-h-[calc(100vh-200px)] overflow-y-auto"
    >
      <ul className="space-y-1">
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
