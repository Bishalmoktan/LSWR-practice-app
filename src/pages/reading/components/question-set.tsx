import { DropdownSelect } from "@/pages/reading/components/dropdown-select";
import { Question } from "@/types/reading";
import React from "react";

interface QuestionSetProps {
  questions: Question[];
  questionInfo: string;
}

export const QuestionSet: React.FC<QuestionSetProps> = ({
  questions,
  questionInfo,
}) => {
  if (questions.length === 0) {
    return null;
  }
  return (
    <div>
      <h2 className="mb-4 font-medium text-customLightBlue">
        <span className="inline-block w-6 h-6 mr-2 text-center text-white rounded-full bg-customLightBlue">
          i
        </span>
        {questionInfo}
      </h2>
      <div className="p-4 space-y-2 border border-black rounded-md">
        {questions.map((question, index) => {
          const textParts = question.text.split("<<>>");

          return (
            <div
              key={index}
              className="flex flex-wrap items-center gap-2 text-sm text-gray-600"
            >
              <span className="">{index + 1}.</span>
              {textParts.map((part, i) => (
                <React.Fragment key={i}>
                  <span>{part}</span>
                  {i < textParts.length - 1 && (
                    <DropdownSelect question={question} />
                  )}
                </React.Fragment>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
