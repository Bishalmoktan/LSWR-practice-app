import CardLayout from "@/components/card-layout";
import InsructionHeader from "@/components/instruction-header";
import InstructionItem from "@/components/instruction-item";
import InstructionVideo from "@/components/instruction-video";
import { useSpeakingContext } from "@/context/SpeakingContext";
import { Navigate, useLocation, useParams } from "react-router-dom";
import SpeakingTest from "./components/speaking-test";
import DescribingImage from "./components/describing-image";
import ComparingImage from "./components/comparing-image";

export default function Speaking() {
  const { sectionId } = useParams();
  const { pathname } = useLocation();

  const { speakingData } = useSpeakingContext();

  if (!speakingData) return <div>Loading...</div>;

  const id = parseInt(sectionId!);
  const section = speakingData.pages[id - 1];

  if (!section) {
    return (
      <Navigate
        to={"/speaking/end-page"}
        state={{
          prevPage: pathname,
        }}
      />
    );
  }

  const next = `/speaking/${id + 1}`;

  return (
    <CardLayout
      recordingTime={section.recordingTime}
      timer={section.prepTime}
      title={section.title}
      prevLink={pathname}
      nextLink={next}
    >
      <div className="min-h-[75vh] overflow-y-scroll">
        {!section.questionSets &&
          section.instructions &&
          section.instructions[0].text && (
            <InsructionHeader text={section.instructions[0].text!} />
          )}
        {section.instructions &&
          section.instructions &&
          section.instructions.length > 0 &&
          section.instructions?.[0].video && (
            <InstructionVideo videoSrc={section.instructions[0].video} />
          )}
        {section.instructions && section.instructions.length > 1 && (
          <InstructionItem instructions={section.instructions.slice(1)} />
        )}

        {section.description && section.questionSets && (
          <>
            <div className="px-8 py-6">
              <DescribingImage
                title={section.questionSets[0].questions[0].text}
                preparationTime={section.prepTime!}
                recordingTime={section.recordingTime!}
                imageUrl={section.description}
              />
            </div>
          </>
        )}

        {section.questionSets &&
          section.questionSets[0].questions[0].type === "mcq" && (
            <>
              <div className="px-8 py-6">
                <ComparingImage
                  prepartionTime={section.prepTime!}
                  recordingTime={section.recordingTime!}
                  selectionTime={section.prepTime!}
                  comparison={
                    section?.questionSets[0]?.questions[0]?.defaultAnswer
                      ?.choice
                  }
                  question={section.questionSets[0].questions[0]}
                />
              </div>
            </>
          )}

        {!section.description &&
          section.questionSets &&
          section.questionSets[0].questions[0].type === "simple" && (
            <>
              <div className="px-8 py-6">
                <SpeakingTest
                  preparationTime={section.prepTime!}
                  recordingTime={
                    section.recordingTime ? section.recordingTime : 0
                  }
                  title={section.questionSets[0].questions[0].text}
                />
              </div>
            </>
          )}
      </div>
    </CardLayout>
  );
}
