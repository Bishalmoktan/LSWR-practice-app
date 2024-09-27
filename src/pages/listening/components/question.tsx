import CardLayout from "@/components/card-layout";
import AudioSection from "./audio-section";
import QuestionSection from "./question-section";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export interface IOption {
    type: string;
    value: string
  }

interface QuestionProps {
  time: number;
  title: string;
  audioUrl: string;
  audioInfo: string;
  nextLink: string;
  prevLink: string;
  question: string;
  options: IOption[];
}

const Question = ({
  time,
  title,
  audioInfo,
  audioUrl,
  nextLink,
  prevLink,
  question,
  options
}: QuestionProps) => {
  const [timer, setTimer] = useState(time);
  const [enableNext, setEnableNext] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const location = useLocation();
  useEffect(() => {
    setEnableNext(false);
    setTimer(time);
  }, [location.pathname])



  return (
    
        <CardLayout
        title={title}
        nextLink={nextLink}
        prevLink={prevLink}
        enableNext={enableNext}
        timer={timer}
        >

          <div className="flex justify-evenly text-customLightBlue text-lg">

          <AudioSection
            audioInfo={audioInfo}
            setEnableNext={setEnableNext}
            audioUrl={audioUrl}
          />
          <QuestionSection
          question={question}
          options={options}
          />
          </div> 
          
        


        </CardLayout>

        
  );
};
export default Question;
