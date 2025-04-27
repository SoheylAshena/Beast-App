import { useSelector } from "react-redux";

import { RootState } from "../types";

export default function useSongs() {
  const songs = useSelector((state: RootState) => state.songs);

  return { songs };
}
