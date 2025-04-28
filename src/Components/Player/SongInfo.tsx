import { SongInfoProps } from '../../types';
import { useCoverImage } from '../../Hooks/useCoverImage';

const SongInfo = ({ title, artist, picture, album }: SongInfoProps) => {
  const url = useCoverImage(picture);
  return (
    <>
      <h2 className="mb-2 text-2xl">{title}</h2>
      <p className="text-gray-400">{artist}</p>
      <p className="text-gray-400">{album}</p>

      <img className="mt-4 h-32 w-32 rounded-full object-cover" src={url || '/music.jpg'} />
    </>
  );
};

export default SongInfo;
