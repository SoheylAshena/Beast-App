import { SongItemProps } from '../../types';
import { formatDuration } from '../../Utilities/formatDuration';

import { setCurrentSongIndex } from '../../Redux/Slices/currentSongSlice';
import { useDispatch } from 'react-redux';

const SongItem = ({ title, artist, duration, index }: SongItemProps) => {
  const dispatch = useDispatch();
  return (
    <li
      className="group animate-fade-in cursor-pointer rounded-xl border border-white/10 bg-gradient-to-r from-fuchsia-900/40 via-cyan-900/30 to-blue-900/40 p-3 shadow-md transition-all hover:scale-105 hover:from-fuchsia-600/40 hover:to-blue-600/40 hover:shadow-xl"
      onClick={() => dispatch(setCurrentSongIndex(index))}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="drop-shadow-glow font-semibold text-fuchsia-200 group-hover:text-fuchsia-300">{title}</div>
          <div className="text-sm text-cyan-200 italic group-hover:text-cyan-100">{artist}</div>
        </div>
        <span className="font-mono text-sm text-blue-200 group-hover:text-blue-100">{formatDuration(duration)}</span>
      </div>
    </li>
  );
};

export default SongItem;
