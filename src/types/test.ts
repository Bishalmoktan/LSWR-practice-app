export interface Page {
  _id: string;
}

export interface Module {
  _id: string;
  type: string;
  pages: string[];
  testId: string;
}

export interface Test {
  _id: string;
  title: string;
  description: string;
  modules: Module[];
  instructions: string[];
  createdAt: string;
  updatedAt: string;
}
