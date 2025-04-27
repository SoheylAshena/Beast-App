import { useDispatch } from "react-redux";
import { addSongs } from "../Redux/Slices/songsSlice";
import { processAudioFiles } from "../services/audioProcessing";

export const useFileHandling = () => {
  const dispatch = useDispatch();

  const handleFolderSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    try {
      const songs = await processAudioFiles(files);
      dispatch(addSongs(songs));
    } catch (error) {
      console.error("Failed to process audio files:", error);
    }
  };

  return { handleFolderSelect };
};
