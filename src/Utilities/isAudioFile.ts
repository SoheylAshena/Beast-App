import { AUDIO_FILE_TYPE } from "../constants";

export const isAudioFile = (file: File): boolean =>
  file.type.startsWith(AUDIO_FILE_TYPE);
