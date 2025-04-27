import { SongItemProps } from "../../types";
import { formatDuration } from "../../Utilities/formatDuration";

import { setCurrentSongIndex } from "../../Redux/Slices/currentSongSlice";
import { useDispatch } from "react-redux";

const SongItem = ({ title, artist, duration, index }: SongItemProps) => {
  const dispatch = useDispatch();
  return (
    <li
      className="p-2 cursor-pointer hover:bg-gray-700 rounded transition-colors"
      onClick={() => dispatch(setCurrentSongIndex(index))}
    >
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="font-medium">{title}</div>
          <div className="text-sm text-gray-400">{artist}</div>
        </div>
        <span className="text-gray-400 text-sm">
          {formatDuration(duration)}
        </span>
      </div>
    </li>
  );
};

export default SongItem;
