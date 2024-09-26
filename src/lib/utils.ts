import listeningTestMockData from "@/data/listeningTest";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTotalQuestionsInPart = (partNumber: number) => {
  const part = listeningTestMockData.parts.find((p) => p.partNumber === partNumber);
  
  if (!part) {
    return `Part ${partNumber} not found.`;
  }

  const totalQuestions = part.sections.reduce((acc, section) => acc + section.questions.length, 0);
  
  return totalQuestions;
};

export const getActualQuestionIndex = (partNumber:number, sectionNumber:number, questionNumber:number) => {
  let totalQuestions = 0;


  const sectionIndex = sectionNumber - 1;
  const currentPart = listeningTestMockData.parts[partNumber - 1];
  for (let i = 0; i < sectionIndex; i++) {
    totalQuestions += currentPart.sections[i].questions.length;
  }

  totalQuestions += questionNumber;

  return totalQuestions;
};
