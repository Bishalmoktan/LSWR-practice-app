import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { SpeakingTest } from "@/types/speaking";
import { useTestContext } from "./TestContext";
import { attemptTest, fetchAttempt } from "@/services/testService";

interface SpeakingContextType {
  speakingData: SpeakingTest | undefined;
  startAudio: string;
  endAudio: string;
}

const SpeakingContext = createContext<SpeakingContextType | undefined>(
  undefined
);

export const SpeakingProvider = ({ children }: { children: ReactNode }) => {
  const { currentTest } = useTestContext();
  const [speakingData, setSpeakingData] = useState<SpeakingTest>();
  const startAudio =
    "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/S_Speaking_Start.ogg";
  const endAudio =
    "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/S_Speaking_Stop.ogg";

  useEffect(() => {
    const fetchListeningData = async () => {
      const module = currentTest?.modules.find(
        (module) => module.type === "Speaking"
      );

      if (currentTest && module) {
        const { _id } = await attemptTest(currentTest?._id, module?._id);
        const { modules } = await fetchAttempt(_id);
        setSpeakingData(modules[0]);
      }
    };

    fetchListeningData();
  }, [currentTest]);

  return (
    <SpeakingContext.Provider value={{ speakingData, startAudio, endAudio }}>
      {children}
    </SpeakingContext.Provider>
  );
};

export const useSpeakingContext = () => {
  const context = useContext(SpeakingContext);
  if (!context) {
    throw new Error("useSpeakingContext must be used within a ReadingProvider");
  }
  return context;
};
