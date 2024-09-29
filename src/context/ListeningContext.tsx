
import { createContext, useContext, useState, ReactNode, SetStateAction } from 'react';
import { ListeningTestData } from "@/types/listening";
import listeningTestMockData from '@/data/listeningTest';
import { getFlattenedQuestions } from '@/lib/utils';

interface ListeningContextType {
  data: ListeningTestData
  userAnswers: number[]; 
  demoAnswer: number;
  setDemoAnswer: React.Dispatch<SetStateAction<number>>;
  setUserAnswer: (index: number, answer: number) => void; 
}

const ListeningContext = createContext<ListeningContextType | undefined>(undefined);

export const ListeningProvider = ({ children }: { children: ReactNode }) => {
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(getFlattenedQuestions(listeningTestMockData).length).fill(-1)); 
  const [demoAnswer, setDemoAnswer] = useState<number>(-1); 
  const data = listeningTestMockData;

  const setUserAnswer = (index: number, answer: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  return (
    <ListeningContext.Provider value={{ data, userAnswers, setUserAnswer, demoAnswer, setDemoAnswer }}>
      {children}
    </ListeningContext.Provider>
  );
};

export const useListeningContext = () => {
  const context = useContext(ListeningContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a ListeningProvider");
  }
  return context;
};
