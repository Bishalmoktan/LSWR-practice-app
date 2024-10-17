export type WritingTest = {
  type: string;
  pages: Array<{
    title: string;
    instructions: Array<{
      text?: string;
      video?: string;
    }>;
    duration?: number;
    description?: string;
    note?: string;
    questionSets?: Array<{
      instructions?: Array<{ text: string }>;
      questions: Array<{
        text: string;
        type: "simple" | "mcq";
        score: number;
        choices?: Array<{ text: string }>;
        correctAnswer?: string;
      }>;
    }>;
  }>;
};
