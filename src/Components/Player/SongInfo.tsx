import { useMemo } from 'react';
import { useSongInfo } from '../../Hooks/useSongInfo';
import { useSongImage } from '../../Hooks/useSongImage';

const SongInfo = () => {
  const { currentSong } = useSongInfo();
  const imageUrl = useSongImage(currentSong?.id ?? null);

  const content = useMemo(() => {
    if (!currentSong) return null;

    return (
      <div className="animate-fade-in mb-10 flex w-full items-center justify-center gap-5">
        <div className="flex w-full items-center justify-center">
          <img className="drop-shadow-glow h-60 w-60 rounded-md object-cover" src={imageUrl || '/music.jpg'} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <h2 className="drop-shadow-glow bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
            {currentSong.title}
          </h2>
          <p className="text-2xl font-medium text-cyan-200">{currentSong.artist}</p>
          <p className="text-sm text-blue-200 italic">{currentSong.album}</p>
        </div>
      </div>
    );
  }, [currentSong, imageUrl]);

  return content;
};

export default SongInfo;
