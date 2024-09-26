import { Info } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useParams } from 'react-router-dom';
import listeningTestMockData from '@/data/listeningTest';
import ListeningCardLayout from './listening-page-layout';

interface QuestionnaireComponentProps {
  time: number;
  title: string;
  nextLink: string;
  prevLink: string;
}

const QuestionnaireComponent = ({
  title,
  time,
  nextLink,
  prevLink,
} : QuestionnaireComponentProps) => {
    const { partNumber, sectionNumber } = useParams();
    const part = listeningTestMockData.parts[parseInt(partNumber!) - 1];
    const section = part.sections[parseInt(sectionNumber!) - 1];

  

  return (
    <ListeningCardLayout
    title={title}
    enableNext={true}
    timer={time}
    nextLink={nextLink}
    prevLink={prevLink}
    >

    <div className="p-6 bg-customSkyBlue min-h-[75vh]">
      <div className="flex items-center gap-2 mb-4 text-customLightBlue">
        <Info size={24} />
        <h2 className="font-medium">Choose the best way to complete each statement from the drop-down menu (▼).</h2>
      </div>
      
      <ol className="space-y-4">
        {section.questions.map((question, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
            <span className="">{index + 1}.</span>
            <span className="">{question.questionText}</span>
            <Select>
              <SelectTrigger className="min-w-20 w-fit rounded-none border-none bg-white font-semibold text-xl focus:outline-none focus:ring-0">
                <SelectValue placeholder=""  />
              </SelectTrigger>
              <SelectContent>
                {question.options.map((option, index) => 
                <SelectItem key={index} value={option.value}>{option.value}</SelectItem>
                )}
               
              </SelectContent>
            </Select>
          </li>
        ))}
      </ol>
    </div>
    </ListeningCardLayout>

  );
};

export default QuestionnaireComponent;