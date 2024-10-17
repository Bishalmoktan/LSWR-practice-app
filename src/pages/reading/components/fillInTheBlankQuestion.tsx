import { DropdownSelect } from "./dropdown-select";

interface Blank {
  id: number;
  options: string[];
}

interface FillInTheBlankResponseProps {
  instruction: string;
  responseText: string;
  blanks: Blank[];
}

export const FillInTheBlankResponse: React.FC<FillInTheBlankResponseProps> = ({
  instruction,
  responseText,
  blanks,
}) => {
  const renderResponseWithBlanks = () => {
    const parts = responseText.split(/(\{\d+\})/g);
    return parts.map((part, index) => {
      const match = part.match(/\{(\d+)\}/);
      if (match) {
        const blankId = parseInt(match[1], 10);
        const blankOptions =
          blanks.find((b) => b.id === blankId)?.options || [];
        return (
          <div className="inline-block">
            <DropdownSelect question={} />
          </div>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="">
      <h2 className="mb-4 font-medium text-customLightBlue">
        <span className="inline-block w-6 h-6 mr-2 text-center text-white rounded-full bg-customLightBlue">
          i
        </span>
        {instruction}
      </h2>
      <div className="p-4 border rounded">
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {renderResponseWithBlanks()}
        </div>
      </div>
    </div>
  );
};
