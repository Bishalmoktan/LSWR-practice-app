/* eslint-disable @typescript-eslint/ban-ts-comment */
import CardLayout from "@/components/card-layout";
import { speakingTestData } from "@/data/speakingTest";
import { SpeakingTestComparison } from "@/types/speaking";
import { Navigate, useParams } from "react-router-dom"

export default function SpeakingInstructions() {
  const { exerciseId } = useParams();
  const exercise = speakingTestData.exercise.find(
    (item) => item.id === exerciseId!
  ) as SpeakingTestComparison;

  if (!exercise) {
    return <Navigate to={"/"} />;
  }

  
  return (
    <CardLayout
      title={exercise.title}
      nextLink={`/speaking/${exerciseId}`}
      prevLink="/speaking"
    >
      <div className="p-8">
      <h2 className="font-medium mb-4 text-customLightBlue">
        <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">
          i
        </span>
        {"Instructions"}
      </h2>

      <div className="text-gray-600 font-medium pl-8 space-y-3">
        <p>This task is made up of THREE parts:</p>
        <div className="list-decimal ml-2">
          {exercise.instructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <p>Click next to continue.</p>
      </div>
      </div>
    </CardLayout>
  )
}