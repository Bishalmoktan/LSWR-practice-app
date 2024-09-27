/* eslint-disable @typescript-eslint/ban-ts-comment */
import CardLayout from "@/components/card-layout";
import { writingTestMockData } from "@/data/writingTest";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { ScenarioSection } from "./scenario-section";
import { WritingSection } from "./writing-section";
import { WritingSectionOption } from "./writing-section-option";

export default function WritingExercise() {
    const { exerciseId } = useParams();
  const exercise = writingTestMockData.exercise.find(
    (e) => e.id === exerciseId
  );

  const next = parseInt(exerciseId!) + 1 ;
  

  if (!exercise) {
    toast.success("Writing Section completed", {
      duration: 2000,
    });
    return <Navigate to={"/"} />;
  }
  return (
    <CardLayout
        title={exercise.title}
        timer={exercise.time}
        nextLink={`/writing/${next}`}
        prevLink="/"
    >
        <div className="grid grid-cols-1 md:grid-cols-3">
            <ScenarioSection 
                content={exercise.scenario}
                scenarioInfo={exercise.scenarioInfo}
            />
      {/*  @ts-ignore */}
            {exercise.type === "no-option" && <WritingSection instructions={exercise.questionInstruction} questionInfo={exercise.question} />}
      {/*  @ts-ignore */}
            {exercise.type === "option" && <WritingSectionOption options={exercise.options} questionInfo={exercise.question} />}
        </div>

    </CardLayout>
  )
}