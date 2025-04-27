const SongInfo = ({ title, artist }: { title: string; artist: string }) => (
  <>
    <h2 className="text-2xl mb-2">{title}</h2>
    <p className="text-gray-400">{artist}</p>
  </>
);

export default SongInfo;
