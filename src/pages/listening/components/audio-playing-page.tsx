import listeningTestMockData from "@/data/listeningTest";
import { useParams } from "react-router-dom";
import AudioSection from "./audio-section";
import { Info } from "lucide-react";
import CardLayout from "@/components/card-layout";

const AudioPlayingPage = () => {
  const { partNumber, sectionNumber } = useParams();

  const part = listeningTestMockData.parts[parseInt(partNumber!) - 1];
  const section = part.sections[parseInt(sectionNumber!) - 1];

  return (
    <CardLayout
      title={section.title}
      nextLink={`/listening/${partNumber}/section/${sectionNumber}/question/${1}`}
      prevLink={`/listening/${partNumber}`}
    >
      <div className="min-h-[80vh] tracking-wide bg-gray-50 p-0">
        {section?.videoUrl ? (
          <div className="py-8 px-16">
            <div className="flex items-start gap-2 mb-4 tracking-tight text-customLightBlue">
              <Info className="self-start " />
              <h3 className="leading-tight">
                {section?.videoInfo ||
                  "Listen to a short statement. You will hear it only once."}
              </h3>
            </div>

            <video
              controls
              src={section?.videoUrl}
              className="w-full h-[50vh]"
              autoPlay
            />
          </div>
        ) : (
          <AudioSection
            audioInfo={section.audioInfo!}
            audioUrl={section.audioUrl}
          />
        )}
      </div>
    </CardLayout>
  );
};
export default AudioPlayingPage;
