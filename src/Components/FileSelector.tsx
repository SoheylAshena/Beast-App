import useFolderSelection from '../Hooks/useFolderSelection';

export default function FileSelector() {
  const { handleFolderSelect } = useFolderSelection();

  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
      <h2 className="drop-shadow-glow mb-4 bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
        Select Music Folder
      </h2>
      <input
        type="file"
        webkitdirectory=""
        directory=""
        multiple
        className="cursor-pointer rounded-lg border-2 border-fuchsia-500/40 bg-gray-900/80 p-2 text-fuchsia-200 shadow-inner transition-all hover:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400"
        onChange={handleFolderSelect}
      />
    </div>
  );
}
