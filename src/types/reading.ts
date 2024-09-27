export interface Question {
  id: string;
  text: string;
  options: string[];
}

export interface BlankOption {
  id: number;
  options: string[];
}

export interface FillInTheBlankQuestion {
  info: string;
  text: string;
  blankOptions: BlankOption[];
}

export interface CorrespondenceExercise {
  id: string;
  title: string;
  type: 'correspondence' | 'diagram' | 'information' | 'viewpoints';
  passage: string;
  passageInfo: string;
  questionInfo: string;
  questions: Question[];
  fillInTheBlankQuestion?: FillInTheBlankQuestion;
  timeLimit: number;
}

export interface DiagramOption {
  type: string;
  image: string;
  features: string[];
  price: string;
  duration: string;
}

export interface DiagramExercise {
  id: string;
  title: string;
  type: 'correspondence' | 'diagram' | 'information' | 'viewpoints';
  diagramOptions: DiagramOption[];
  questionInfo: string;
  questions: Question[];
  fillInTheBlankQuestion?: FillInTheBlankQuestion;
  timeLimit: number;
}

type Exercise = CorrespondenceExercise | DiagramExercise

export interface ReadingTestData {
  testName: string;
  mainInstruction: string[];
  videoInstruction: string;
  demoTest: {
    title: string;
    exercise: Exercise[];
  };
  exercise: Exercise[];
}