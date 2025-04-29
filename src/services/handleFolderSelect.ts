import { handleFolderProcess } from './handleFolderProcess';
import { handleFolderSelectService } from './handleFolderSelectService';

export const handleFolderSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = await handleFolderSelectService(event); //This will get the files from selected folder
  await handleFolderProcess(files); //This will process files and put it in indexedDB
};
