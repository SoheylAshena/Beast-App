import TopControls from './TopControls';
import SeekBar from './SeekBar';
import VolumeAndMute from './VolumeAndMute';
import PlaybackRateAndLoop from './PlaybackRateAndLoop';

const PlayerControls = () => {
  return (
    <div className="animate-fade-in mt-6 flex w-full flex-col items-center space-y-8">
      <TopControls />
      <SeekBar />
      <div className="flex w-full justify-between">
        <VolumeAndMute />
        <PlaybackRateAndLoop />
      </div>
    </div>
  );
};

export default PlayerControls;
