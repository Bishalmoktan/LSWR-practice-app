import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { ListeningTest } from "@/types/listening";
import { useTestContext } from "./TestContext";
import { attemptTest, fetchAttempt } from "@/services/testService";

interface ListeningContextType {
  listeningData: ListeningTest | undefined;
  userAnswers: number[];
  setUserAnswer: (index: number, answer: number) => void;
}

const ListeningContext = createContext<ListeningContextType | undefined>(
  undefined
);

export const ListeningProvider = ({ children }: { children: ReactNode }) => {
  const { currentTest } = useTestContext();
  const [listeningData, setListeningData] = useState<ListeningTest>();
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const setUserAnswer = (index: number, answer: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  useEffect(() => {
    const fetchListeningData = async () => {
      const module = currentTest?.modules.find(
        (module) => module.type === "Listening"
      );
      if (module) {
        setUserAnswers(new Array(module.pages.length).fill(-1));
      }
      if (currentTest && module) {
        const { _id } = await attemptTest(currentTest?._id, module?._id);
        const { modules } = await fetchAttempt(_id);
        setListeningData(modules[0]);
      }
    };

    fetchListeningData();
  }, [currentTest]);

  return (
    <ListeningContext.Provider
      value={{ listeningData, userAnswers, setUserAnswer }}
    >
      {children}
    </ListeningContext.Provider>
  );
};

export const useListeningContext = () => {
  const context = useContext(ListeningContext);
  if (!context) {
    throw new Error(
      "useListeningContext must be used within a ListeningProvider"
    );
  }
  return context;
};
