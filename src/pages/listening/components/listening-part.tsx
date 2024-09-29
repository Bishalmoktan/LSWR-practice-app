import CardLayout from "@/components/card-layout";
import listeningTestMockData from "@/data/listeningTest";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export default function ListeningPart() {
  const { partNumber } = useParams();
  if(parseInt(partNumber!) > listeningTestMockData.parts.length){
    toast.success("Listening test completed", {
      duration: 2000
    })
    return <Navigate to={"/listening/answer-key"} />
  }
const part = listeningTestMockData.parts[parseInt(partNumber!) - 1];

  return (
    <CardLayout
      title={part.title}
      nextLink={`/listening/${partNumber}/instruction`}
      prevLink={`/listening/demo-test`}
      hasAnswerKey={true}
    >
      <div className="py-4 px-16 text-base ">
        <div className=" flex items-center gap-2 mb-2 font-medium">
          <h3 className="">{part.subtitle}</h3>
        </div>
        <ul className="list-disc ml-4 mb-4 max-w-[70%]">
          {part.instruction.map((instruction, index) => (
            <li
              className="border-b border-dashed py-4 font-medium text-customLightBlue"
              key={index}
            >
              {instruction}
            </li>
          ))}
        </ul>

        <audio src={part.audioUrl} autoPlay className=""></audio>
      </div>
    </CardLayout>
  );
}
