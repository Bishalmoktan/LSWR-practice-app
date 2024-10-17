// TestContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { Test } from "@/types/test";
import { getAllTests } from "@/services/testService";

interface TestContextType {
  tests: Test[] | null;
  currentTest: Test | null;
  setTests: (test: Test[]) => void;
  setCurrentTest: (test: Test) => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tests, setTests] = useState<Test[] | null>(null);
  const [currentTest, setCurrentTest] = useState<Test | null>(null);

  useEffect(() => {
    const fetchTests = async () => {
      const data = await getAllTests();
      setTests(data.result.data);
    };
    fetchTests();
  }, []);

  return (
    <TestContext.Provider
      value={{
        tests,
        currentTest,
        setTests,
        setCurrentTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = (): TestContextType => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTestContext must be used within a TestProvider");
  }
  return context;
};
