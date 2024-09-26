import listeningTestMockData from "@/data/listeningTest";
import { Info } from "lucide-react";
import {  useParams } from "react-router-dom";
import ListeningCardLayout from "./listening-page-layout";

const Instructions = () => {
  const { partNumber } = useParams();
  const part = listeningTestMockData.parts[parseInt(partNumber!) - 1];
  return (
    <ListeningCardLayout
      title={part.title}
      nextLink={`/listening/${partNumber}/audio/1`}
      prevLink={`/listening/${partNumber}`}
    >
      <div className="py-4 px-8">

      <div className=" flex items-center gap-2 mb-2 font-medium text-customLightBlue">
        <Info />
        <h3 className="">Instructions: </h3>
      </div>
      <div className="px-10 font-medium mt-8 text-gray-600">
        {part.subInstruction}
      </div>

      {part.subInstructionImg && (
        <img
          src={part.subInstructionImg}
          alt="instructions"
          className="w-[80%] mx-auto mt-4 object-cover"
        />
      )}

</div>

    </ListeningCardLayout>
  );
};
export default Instructions;
