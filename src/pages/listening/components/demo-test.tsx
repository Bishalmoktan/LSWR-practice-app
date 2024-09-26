import listeningTestMockData from "@/data/listeningTest";
import Question from "./question";

const DemoTest = () => {

    const { title, audioInfo, audioUrl, questions } = listeningTestMockData.demoTest

    

  return (
    <Question
    audioInfo={audioInfo}
    audioUrl={audioUrl}
    time={questions[0].time}
    title={title}
    nextLink="/listening/1"
    prevLink="/listening/video-instruction"
    question={questions[0].questionText}
    options={questions[0].options}
    />
  )
}
export default DemoTest