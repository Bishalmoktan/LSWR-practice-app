import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { WritingTest } from "@/types/writing";
import { useTestContext } from "./TestContext";
import { attemptTest, fetchAttempt } from "@/services/testService";

interface WritingContextType {
  writingData: WritingTest | undefined;
}

const WritingContext = createContext<WritingContextType | undefined>(undefined);

export const WritingProvider = ({ children }: { children: ReactNode }) => {
  const { currentTest } = useTestContext();
  const [writingData, setWritingData] = useState<WritingTest>();

  useEffect(() => {
    const fetchListeningData = async () => {
      const module = currentTest?.modules.find(
        (module) => module.type === "Writing"
      );

      if (currentTest && module) {
        const { _id } = await attemptTest(currentTest?._id, module?._id);
        const { modules } = await fetchAttempt(_id);
        setWritingData(modules[0]);
      }
    };

    fetchListeningData();
  }, [currentTest]);

  return (
    <WritingContext.Provider value={{ writingData }}>
      {children}
    </WritingContext.Provider>
  );
};

export const useWritingContext = () => {
  const context = useContext(WritingContext);
  if (!context) {
    throw new Error("useWritingContext must be used within a WritingProvider");
  }
  return context;
};
