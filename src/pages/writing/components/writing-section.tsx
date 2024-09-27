import React from "react";

interface WritingSectionProps {
  instructions: string[];
  questionInfo: string;
  
}

export const WritingSection: React.FC<WritingSectionProps> = ({
  instructions,
  questionInfo,
}) => {
  
  return (
    <div className="col-span-2 p-4 bg-customSkyBlue border-l border-gray-300 h-[75vh] overflow-y-scroll">
      <h2 className="font-medium mb-4 text-customLightBlue">
        <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">i</span>
        {questionInfo}
      </h2>
      <ul className="list-disc pl-8">
        {instructions.map((question, index) => (
          <li key={index} className="text-sm">{question}</li>
        ))}
      </ul>

        <textarea name="" id="" className="w-full h-[60%] rounded-md border mt-8 p-2"></textarea>
    </div>
  );
};
