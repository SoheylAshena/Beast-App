import { SongInfoProps } from '../../types';
import { useCoverImage } from '../../Hooks/useCoverImage';

const SongInfo = ({ title, artist, picture, album }: SongInfoProps) => {
  const url = useCoverImage(picture);
  return (
    <div className="animate-fade-in flex w-full flex-col items-center gap-2">
      <div className="relative mb-4">
        <img
          className="animate-spin-slow h-36 w-36 rounded-full border-4 border-fuchsia-500/40 bg-gray-800/80 object-cover shadow-2xl"
          src={url || '/music.jpg'}
        />
        <div className="pointer-events-none absolute inset-0 animate-pulse rounded-full ring-4 ring-cyan-400/30" />
      </div>
      <h2 className="drop-shadow-glow bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent">
        {title}
      </h2>
      <p className="font-medium text-cyan-200">{artist}</p>
      <p className="text-sm text-blue-200 italic">{album}</p>
    </div>
  );
};

export default SongInfo;
