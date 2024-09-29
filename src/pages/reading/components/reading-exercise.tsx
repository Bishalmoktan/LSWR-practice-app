/* eslint-disable @typescript-eslint/ban-ts-comment */
import CardLayout from "@/components/card-layout";
import { readingTestMockData } from "@/data/readingTest";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { QuestionSet } from "./question-set";
import { ReadingPassage } from "./reading-passage";
import { FillInTheBlankResponse } from "./fillInTheBlankQuestion";
import { DiagramSection } from "./diagram-section";
import { getNextExerciseId } from "@/lib/utils";

export default function ReadingExercise() {
  const { exerciseId } = useParams();
  const exercise = readingTestMockData.exercise.find(
    (e) => e.id === exerciseId
  );

  const next = getNextExerciseId(exerciseId!);
  

  if (!exercise) {
    toast.success("Reading Section completed", {
      duration: 2000,
    });
    return <Navigate to={"/writing"} />;
  }

  return (
    <CardLayout
      title={exercise?.title}
      timer={exercise?.timeLimit}
      nextLink={`/reading/${next}`}
      prevLink="/reading/video-instruction"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 text-gray-600">
        {exercise.type === "correspondence" ? (
          <ReadingPassage
          // @ts-ignore
          content={exercise.passage}
          // @ts-ignore
            passageInfo={exercise.passageInfo}
          />
        ): null}

        {exercise.type === "diagram" && (
          <DiagramSection
          // @ts-ignore
          diagramData={exercise.diagramOptions}
          />
        )}

        <div className="p-4 space-y-6 border-l border-gray-300 bg-customSkyBlue h-[75vh] overflow-y-scroll">
          
          <QuestionSet
            questionInfo={exercise.questionInfo}
            questions={exercise.questions}
          />

          {exercise.fillInTheBlankQuestion && (
            <FillInTheBlankResponse
              instruction={exercise.fillInTheBlankQuestion.info}
              responseText={exercise.fillInTheBlankQuestion.text}
              blanks={exercise.fillInTheBlankQuestion.blankOptions}
            />
          )}
        </div>

      </div>
    </CardLayout>
  );
}
