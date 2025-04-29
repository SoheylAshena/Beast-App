import { createContext, createRef } from 'react';

export const AudioRefContext = createContext<React.RefObject<HTMLAudioElement | null>>(createRef<HTMLAudioElement>());
