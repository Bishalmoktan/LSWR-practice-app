import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import listeningTestMockData from "@/data/listeningTest";
import { Info } from "lucide-react";

const QuestionSection = () => {
  const question = listeningTestMockData.demoTest.question[0].questionText;
  const options = listeningTestMockData.demoTest.question[0].options;
  return (
    <div className="border-l flex-1 pt-8 bg-customSkyBlue px-6">
      <div className="flex items-center gap-2 mb-4">
        <Info className="mb-7" />
        <h3>{question}</h3>
      </div>

        <RadioGroup>

        {options.map((option, index) => {
       return  <div key={index} className="flex items-center space-x-2 border-b border-dotted py-2 hover:bg-customGreen">
        <RadioGroupItem value={option.value} id={option.value} />
        <Label htmlFor={option.value}>{option.value}</Label>
      </div>
           
        })}
        </RadioGroup>
    </div>
  );
};
export default QuestionSection;
