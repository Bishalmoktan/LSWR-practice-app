import AudioSection from "./audio-section";
import { Info } from "lucide-react";
import CardLayout from "@/components/card-layout";

const AudioPlayingPage = () => {
  

  return (

      <div className="min-h-[80vh] tracking-wide bg-gray-50 p-0">
        {videoUrl ? (
          <div className="py-8 px-16">
            <div className="flex items-start gap-2 mb-4 tracking-tight text-customLightBlue">
              <Info className="self-start " />
              <h3 className="leading-tight">
                {videoInfo ||
                  "Listen to a short statement. You will hear it only once."}
              </h3>
            </div>

            <video
              controls
              src={videoUrl}
              className="w-full h-[50vh]"
              autoPlay
            />
          </div>
        ) : (
          <AudioSection
            audioInfo={audioInfo!}
            audioUrl={audioUrl}
          />
        )}
      </div>
    </CardLayout>
  );
};
export default AudioPlayingPage;
