import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { ReadingTest } from "@/types/reading";
import { useTestContext } from "./TestContext";
import { attemptTest, fetchAttempt } from "@/services/testService";

interface ReadingContextType {
  readingData: ReadingTest | undefined;
  userAnswers: number[];
  setUserAnswer: (index: number, answer: number) => void;
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export const ReadingProvider = ({ children }: { children: ReactNode }) => {
  const { currentTest } = useTestContext();
  const [readingData, setReadingData] = useState<ReadingTest>();

  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const setUserAnswer = (index: number, answer: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  useEffect(() => {
    const fetchListeningData = async () => {
      const module = currentTest?.modules.find(
        (module) => module.type === "Reading"
      );
      if (module) {
        setUserAnswers(new Array(module.pages.length).fill(-1));
      }
      if (currentTest && module) {
        const { _id } = await attemptTest(currentTest?._id, module?._id);
        const { modules } = await fetchAttempt(_id);
        setReadingData(modules[0]);
      }
    };

    fetchListeningData();
  }, [currentTest]);

  return (
    <ReadingContext.Provider
      value={{ readingData, userAnswers, setUserAnswer }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

export const useReadingContext = () => {
  const context = useContext(ReadingContext);
  if (!context) {
    throw new Error("useReadingContext must be used within a ReadingProvider");
  }
  return context;
};
