/* eslint-disable @typescript-eslint/ban-ts-comment */
import CardLayout from "@/components/card-layout";
import { readingTestMockData } from "@/data/readingTest";
import { ReadingPassage } from "./reading-passage";
import { QuestionSet } from "./question-set";
import { useEffect, useState } from "react";

export default function DemoReadingTest() {
    const {demoTest} = readingTestMockData;
    const [timer, setTimer] = useState(demoTest.exercise[0].timeLimit);
    const next = readingTestMockData.exercise[0].id
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
   <CardLayout
   title={demoTest.title}
   nextLink={`/reading/${next}`}
   prevLink="/video-instruction"
   timer={timer}
    hasAnswerKey={true}
   >
    <div className="grid gird-cols-1 md:grid-cols-2">

    <ReadingPassage
    // @ts-ignore
    content={demoTest.exercise[0].passage}
    // @ts-ignore
    passageInfo={demoTest.exercise[0].passageInfo}
    />
        <div className="p-4 space-y-6 border-l border-gray-300 bg-customSkyBlue h-[75vh] overflow-y-scroll">

    <QuestionSet
    questions={demoTest.exercise[0].questions}
    questionInfo={demoTest.exercise[0].questionInfo}
    />
    </div>
</div> 

   </CardLayout>
  )
}