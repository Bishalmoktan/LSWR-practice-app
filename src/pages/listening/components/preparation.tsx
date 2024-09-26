import listeningTestMockData from "@/data/listeningTest";
import ListeningCardLayout from "./listening-page-layout"
import { useNavigate, useParams } from "react-router-dom";
import { Clock, Info } from "lucide-react";
import { useEffect, useState } from "react";

const Preparation = () => {
    const [timer, setTimer] = useState(10);
    const { partNumber, sectionNumber } = useParams();
    const part = listeningTestMockData.parts[parseInt(partNumber!) - 1];
    const section = part.sections[parseInt(sectionNumber!) - 1];
  
    const next = `/listening/${partNumber}/audio/${sectionNumber}`;

    const prev = `/listening/${partNumber}/audio/${sectionNumber}`
    const naviate = useNavigate();

    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0) {
            naviate(next);
            return 0;
          };
          return prev - 1;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    
  
  return (
    <ListeningCardLayout
    title={section.title}
    nextLink={next}
    prevLink={prev}
    >
        <div className="py-4 px-8">
        <div className="flex items-start gap-2 mb-4 tracking-tight text-customLightBlue">
        <Info className="self-start " />
        <h3 className="tracking-wide font-medium">{ "You will hear the second section of the conversation shortly."}</h3>
      </div>
         <div className="mx-auto bg-gray-200 py-6 px-10 rounded-md flex items-center justify-between w-fit gap-8">
          <Clock />
          <div className="flex flex-col justify-center items-center">
            <span className="font-semibold">Preparation Time</span>
            <span className="text-blue-600">{timer}</span>
          </div>
        </div>
        </div>
    </ListeningCardLayout>
  )
}
export default Preparation