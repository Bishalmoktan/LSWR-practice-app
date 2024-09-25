import { Info, Volume2 } from "lucide-react";
import { useState, useRef } from "react";
import { Progress } from "@/components/ui/progress";
import listeningTestMockData from "@/data/listeningTest";

const AudioSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const audioUrl = listeningTestMockData.demoTest.audioUrl;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      const progressValue = (currentTime / duration) * 100;
      setProgress(progressValue);
    }
  };

  return (
    <div className="flex-1 py-8 px-6">
      <div className="flex items-center gap-2 mb-4">
        <Info className="mb-7" />
        <h3>Listen to a short statement. You will hear it only once.</h3>
      </div>

      <div className="py-2">
        <div className="mx-auto bg-customGray py-6 px-10 rounded-md flex items-center justify-between w-fit gap-8">
          <div className="bg-white p-2 rounded-sm">
            {isPlaying ? <Volume2 /> : <Info />}
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>
              {isPlaying ? "Playing..." : `Click "NEXT" to continue.`}
            </span>
            {isPlaying && (
              <Progress
                value={progress}
                className="w-[200px] bg-white rounded-none h-4 mt-2"
              />
            )}
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        controls
        autoPlay
        src={audioUrl}
        className="w-[400px] mb-4 mx-auto"
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate} 
      />
    </div>
  );
};

export default AudioSection;
