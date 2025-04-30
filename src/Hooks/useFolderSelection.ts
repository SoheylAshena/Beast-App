import { handleFolderProcess } from '../services/handleFolderProcess';
import { handleFolderSelectService } from '../services/handleFolderSelectService';

const useFolderSelection = () => {
  const handleFolderSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = await handleFolderSelectService(event); //This will get the files from selected folder
    await handleFolderProcess(files); //This will process files and put it in indexedDB and returns it
  };

  return { handleFolderSelect };
};

export default useFolderSelection;
