export interface WritingExerciseWithoutOption {
  id: string;
  title: string;
  scenario: string;
  type: "no-option" | "option";
  scenarioInfo: string;
  question: string;
  time: number;
  questionInstruction: string[];
}

export interface WritingExerciseWithOption {
  id: string;
  title: string;
  scenario: string;
  type: "no-option" | "option";
  scenarioInfo: string;
  question: string;
  time: number;
  options: string[];
}
 
type Exercise = WritingExerciseWithoutOption | WritingExerciseWithOption

export interface WritingTestData {
  testName: string;
  mainInstruction: string[];
  videoInstruction: string;
  exercise: Exercise[];
}
