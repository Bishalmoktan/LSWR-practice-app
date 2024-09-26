import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Info } from "lucide-react";
import { IOption } from "./question";
import { useLocation, useParams } from "react-router-dom";
import { getActualQuestionIndex, getTotalQuestionsInPart } from "@/lib/utils";

interface QuestionSectionProps {
  question: string;
  options: IOption[];
}

const QuestionSection = ({ options, question }: QuestionSectionProps) => {
  const { partNumber, sectionNumber, questionNumber } = useParams();
  const totalQuestion = getTotalQuestionsInPart(parseInt(partNumber!));
  const currentQuestion = getActualQuestionIndex(
    parseInt(partNumber!),
    parseInt(sectionNumber!),
    parseInt(questionNumber!)
  );

  const location = useLocation();
  return (
    <div className="border-l flex-1 pt-4 bg-customSkyBlue px-6 min-h-[75vh]">
      <div className="text-gray-600 text-sm mb-4">
       {!location.pathname.includes("demo-test") &&  `Question ${currentQuestion} of ${totalQuestion}`}
      </div>
      <div className="flex items-start gap-2 mb-4 tracking-tight">
        <Info className="self-start mt-[2px]" />
        <h3 className="leading-tight">{question}</h3>
      </div>

      <RadioGroup>
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className="flex items-center  space-x-2 border-b border-gray-300 border-dotted ml-8 py-2 hover:bg-customGreen"
            >
              <RadioGroupItem value={option.value} id={option.value} />
              {option.type == "text" && (
                <Label className="cursor-pointer" htmlFor={option.value}>
                  {option.value}
                </Label>
              )}
              {option.type == "image" && (
                <Label className="cursor-pointer" htmlFor={option.value}>
                  <img src={option.value} className="w-44" alt="option" />
                </Label>
              )}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};
export default QuestionSection;
