import { useDispatch } from 'react-redux';
import { formatDuration } from '../Utilities/formatDuration';
import { setCurrentSongIndex } from '../Redux/Slices/currentSongSlice';

const useSongItem = (duration: number, index: number) => {
  const dispatch = useDispatch();
  const songDuration = formatDuration(duration);
  const handleClick = () => dispatch(setCurrentSongIndex(index));

  return { songDuration, handleClick };
};

export default useSongItem;
