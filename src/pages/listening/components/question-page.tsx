import { useParams } from "react-router-dom";
import Question from "./question"
import listeningTestMockData from "@/data/listeningTest";
import QuestionnaireComponent from "./questionnaire";

const QuestionPage = () => {
  const { partNumber, sectionNumber, questionNumber } = useParams();
  const part = listeningTestMockData.parts[parseInt(partNumber!) - 1];
  const section = part.sections[parseInt(sectionNumber!) - 1];
  const question = section.questions[parseInt(questionNumber!) - 1];



  let next = `/listening/${partNumber}/section/${sectionNumber}/question/${parseInt(questionNumber!) + 1}`;
  if(section.questions.length  === parseInt(questionNumber!)  &&  parseInt(sectionNumber!) < part.sections.length ){
    next = `/listening/${partNumber}/section/${parseInt(sectionNumber!) + 1}/preparation`
  } else if (part.sections.length === parseInt(sectionNumber!) && section.questions.length === parseInt(questionNumber!)){
    next = `/listening/${parseInt(partNumber!) + 1}`
  }

  const isQuestionnaire = question.options[0].type == 'dropdown'
  if(isQuestionnaire){
    next = `/listening/${parseInt(partNumber!) + 1}`
  }


  return (
    <>
   {!isQuestionnaire ? <Question
      time={question.time}
      title={section.title}
      audioInfo={question.audioInfo}
      audioUrl={question.audioUrl}
      nextLink={next}
      prevLink={`/listening/${partNumber}/audio/${sectionNumber}`}
      options={question.options}
      question={question.questionText}
    /> :
    <QuestionnaireComponent
    title={section.title}
    nextLink={next}
    prevLink={`/listening/${partNumber}/audio/${sectionNumber}`}
    time={question.time}
    />
  }
    </>

  )
}
export default QuestionPage