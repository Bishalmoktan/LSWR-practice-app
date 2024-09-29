export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface BlankOption {
  id: number;
  options: string[];
  correctAnswer: number;

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
  hasAnswerKey: boolean;
  mainInstruction: string[];
  videoInstruction: string;
  demoTest: {
    title: string;
    exercise: Exercise[];
  };
  exercise: Exercise[];
  endPage: {
    title: string;
    instruction: string[];
  }
}