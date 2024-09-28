export interface SpeakingTestImage {
    id: string;
    title: string;
    prepartionTime: number;
    recordingTime: number;
    hasIntruction: boolean;
    type: "image";
    question: string;
    imageUrl: string;
  }

  export interface ComparisonImage {
    id: string;
    name: string;
    features: string[];
  }
  
  export interface SpeakingTestComparison {
    id: string;
    title: string;
    prepartionTime: number;
    recordingTime: number;
    hasIntruction: boolean;
    type: "comparsion";
    question: string;
    instructions: string[];
    images: ComparisonImage[];
  }

  export interface SpeakingTest {
    id: string;
    title: string;
    prepartionTime: number;
    recordingTime: number;
    hasIntruction: boolean;
    type: "question";
    question: string;
  }
   
  type Exercise = SpeakingTest | SpeakingTestImage | SpeakingTestComparison
  
  export interface SpeakingTestData {
    testName: string;
    startAudio: string;
    endAudio: string;
    mainInstruction: string[];
    videoInstruction: string;
    demoTest: SpeakingTest;
    exercise: Exercise[];
  }
  