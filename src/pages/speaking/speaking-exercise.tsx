import CardLayout from "@/components/card-layout";
import { speakingTestData } from "@/data/speakingTest";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import SpeakingTest from "./speaking-test";
import { getNextSpeakingExerciseId } from "@/lib/utils";
import DescribingImage from "./describing-image";

export default function SpeakingExercise() {
  const { exerciseId } = useParams();

  const exercise = speakingTestData.exercise.find(
    (item) => item.id === exerciseId!
  );

  if (!exercise) {
    toast.success("Speaking Section completed", {
      duration: 2000,
    });
    return <Navigate to={"/"} />;
  }

  const next = getNextSpeakingExerciseId(exerciseId!);
  console.log(next);

  return (
    <CardLayout
      title={exercise.title}
      prevLink="/speaking/video-instruction"
      nextLink={`/speaking/${next}`}
      timer={exercise.prepartionTime}
      recordingTime={exercise.recordingTime}
    >
      <div className="py-6 px-8">
        {exercise.type === "question" && (
          <>
            {" "}
            <SpeakingTest
              title={exercise.question}
              preparationTime={exercise.prepartionTime}
              recordingTime={exercise.recordingTime}
            />
          </>
        )}
        {exercise.type === "image" && (
          <>
            {" "}
            <DescribingImage
              title={exercise.question}
              preparationTime={exercise.prepartionTime}
              recordingTime={exercise.recordingTime}
              imageUrl={exercise.imageUrl}
            />
          </>
        )}
      </div>
    </CardLayout>
  );
}
