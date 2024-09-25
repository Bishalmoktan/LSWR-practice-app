import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import listeningTestMockData from "@/data/listeningTest";
import { useNavigate, useParams } from "react-router-dom";

export default function ListeningPart() {
    const { partNumber } = useParams();
    const navigate = useNavigate();
    const part = listeningTestMockData.parts[parseInt(partNumber!) - 1];
  
    const goToNextPart = () => {
      const nextPartNumber = parseInt(partNumber!) + 1;
      if (nextPartNumber <= listeningTestMockData.parts.length) {
        navigate(`/listening/${nextPartNumber}`);
      } else {
        // Handle test completion
        alert("Test completed!");
      }
    };
  
    const goToPreviousPart = () => {
      const prevPartNumber = parseInt(partNumber!) - 1;
      if (prevPartNumber >= 1) {
        navigate(`/listening/${prevPartNumber}`);
      } else {
        navigate('/listening');
      }
    };
  
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white shadow overflow-hidden rounded-none">
          <CardHeader className="flex flex-row justify-between bg-gray-200 py-2">
            <h2 className="font-semibold text-gray-600">{`Part ${part.partNumber}: ${part.title}`}</h2>
            <Button
              className="bg-customBlue hover:bg-customDarkBlue px-2 h-6 text-sm text-white rounded-none"
              onClick={goToNextPart}
            >
              Next
            </Button>
          </CardHeader>
          <CardContent>
            <h3 className="font-bold mb-4">Instructions:</h3>
            <ul className="list-disc pl-5 mb-4">
              {part.instruction.map((instr, index) => (
                <li key={index}>{instr}</li>
              ))}
            </ul>
            <p className="mb-4">{part.subInstruction}</p>
            <audio controls src={part.audioUrl} className="w-full mb-4" />
            {/* Implement the questions and answer options here */}
          </CardContent>
          <CardFooter className="flex justify-end py-2 bg-customGray">
            <Button 
              className="bg-customRed hover:bg-customRed/90 px-2 h-6 text-sm text-white rounded-none"
              onClick={goToPreviousPart}
            >
              Back
            </Button>
          </CardFooter>
        </Card>
      </section>
  )
}

