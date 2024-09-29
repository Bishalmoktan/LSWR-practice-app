
import { createContext, useContext, useState, ReactNode, SetStateAction } from 'react';
import { ReadingTestData } from '@/types/reading';
import { readingTestMockData } from '@/data/readingTest';

interface ReadingContextType {
  data: ReadingTestData
  userAnswers: number[]; 
  demoAnswer: number;
  setDemoAnswer: React.Dispatch<SetStateAction<number>>;
  setUserAnswer: (index: number, answer: number) => void; 
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export const ReadingProvider = ({ children }: { children: ReactNode }) => {
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(readingTestMockData.demoTest.exercise.length).fill(-1)); 
  const [demoAnswer, setDemoAnswer] = useState<number>(-1); 
  const data = readingTestMockData;

  const setUserAnswer = (index: number, answer: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  return (
    <ReadingContext.Provider value={{ data, userAnswers, setUserAnswer, demoAnswer, setDemoAnswer }}>
      {children}
    </ReadingContext.Provider>
  );
};

export const useReadingContext = () => {
  const context = useContext(ReadingContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a ReadingProvider");
  }
  return context;
};
