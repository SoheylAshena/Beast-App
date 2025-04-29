export const handleFolderSelectService = async (e: React.ChangeEvent<HTMLInputElement>) => {
  return Array.from(e.target.files || []);
};
