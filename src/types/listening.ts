type Option = {
    type: 'text' | 'image' | 'dropdown';
    value: string;
  };
  
  type Question = {
    time: number;
    questionText: string;
    audioInfo: string;
    audioUrl: string;
    videoInfo?: string;
    videoUrl?: string;
    options: Option[];
    correctAnswer: number;
  };
  
  type Section = {
    sectionNumber: number;
    title: string;
    audioUrl: string;
    videoUrl?: string;
    audioInfo?: string;
    videoInfo?: string;
    questions: Question[];
  };
  
  type Part = {
    partNumber: number;
    title: string;
    subtitle?: string;
    instruction: string[];
    audioUrl: string;
    subInstruction: string;
    subInstructionImg?: string;
    sections: Section[];
  };
  
  type DemoTest = {
    title: string;
    audioUrl: string;
    audioInfo: string;
    questions: Question[];
  };
  
  type ListeningTestData = {
    testName: string;
    mainInstruction: string[];
    videoInstruction: string;
    demoTest: DemoTest;
    parts: Part[];
  };

  export type { ListeningTestData, Part, Section, Question, Option };