import { useFileHandling } from "../Hooks/useFileHandling";

export default function FileSelector() {
  const { handleFolderSelect } = useFileHandling();

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-2xl mb-4">Select Music Folder</h2>
      <input
        type="file"
        webkitdirectory=""
        directory=""
        multiple
        className="p-2 border rounded border-gray-600 bg-gray-800"
        onChange={handleFolderSelect}
      />
    </div>
  );
}
