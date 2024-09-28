import { Clock, Mic } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { speakingTestData } from "@/data/speakingTest";
import { useLocation } from "react-router-dom";

interface TimerProps {
  preparationTime: number;
  recordingTime: number;
}

const Timer = ({ preparationTime, recordingTime }: TimerProps) => {
  const [time, setTime] = useState(preparationTime);
  const [isRecording, setIsRecording] = useState(false);
  const [show, setShow] = useState(false);
  const [recordingDuration] = useState(recordingTime);

  const { endAudio, startAudio } = speakingTestData;

  const startRef = useRef<HTMLAudioElement>(null);
  const endRef = useRef<HTMLAudioElement>(null);

  const location = useLocation();

  useEffect(() => {
    setTime(preparationTime);
  }, [location])

 

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          if (!isRecording) {
            setIsRecording(true);
            setShow(true);
            if (startRef.current) {
              startRef.current.play();
            }
            return recordingDuration; 
          } else {
            clearInterval(interval);
            return 0; 
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRecording, recordingDuration]);

  useEffect(() => {
    if (time === 0 && isRecording) {
      endRef.current?.play();
      setShow(false);
    }
  }, [time, isRecording]);

  const progressValue = isRecording
    ? ((recordingDuration - time) / recordingDuration) * 100
    : 0;

  return (
    <div className="py-2">
      {!isRecording && (
        <div className="mx-auto bg-gray-200 py-6 px-10 rounded-md flex items-center justify-between w-fit gap-8">
          <div className="bg-white p-2 rounded-sm">
            <Clock />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-semibold">Preparation Time</span>
            <span className="text-blue-600">{time}</span>
          </div>
        </div>
      )}

      {show && isRecording && (
        <div className="mx-auto bg-gray-200 py-6 px-10 rounded-md flex items-center justify-between w-fit gap-8">
          <div className="bg-white p-2 rounded-sm">
            <Mic />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-semibold">Recording...</span>
            <Progress value={progressValue} className="w-[200px] bg-white rounded-none h-4 mt-2" />
          </div>
        </div>
      )}

      

      <audio src={startAudio} ref={startRef}></audio>
      <audio src={endAudio} ref={endRef}></audio>
    </div>
  );
};

export default Timer;
