import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "./pages/home/home";
import VideoInstruction from "./components/video-instruction";
import listeningTestMockData from "./data/listeningTest";
import MainInstruction from "./components/main-instruction";
import { readingTestMockData } from "./data/readingTest";
import DemoReadingTest from "./pages/reading/components/demo-test";
import ReadingExercise from "./pages/reading/components/reading-exercise";
import { speakingTestData } from "./data/speakingTest";
import SpeakingDemoTest from "./pages/speaking/speaking-demo-test";
import SpeakingExercise from "./pages/speaking/speaking-exercise";
import SpeakingInstructions from "./pages/speaking/speaking-instruction";
import { completeTestData } from "./data/completeTest";
import EndPage from "./components/end-page";
import Result from "./components/result";
import ReadingAnswerKey from "./pages/reading/components/reading-answer-key";
import Writing from "./pages/writing/writing";
import Listening from "./pages/listening/listening";
import AnswerKeyPage from "./components/answer-key";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/listening/:sectionId",
        element: <Listening />
      },
      {
        path: "/listening/answer-key",
        element: (
          <AnswerKeyPage
            title="Practice Test A - Listening Answer Key"
            nextLink="/listening/result"
          />
        ),
      },
      {
        path: "/listening/result",
        element: <Result nextLink="/listening/end-page" title="Listening" />,
      },
      {
        path: "/listening/end-page",
        element: (
          <EndPage
            title={listeningTestMockData.endPage.title}
            instructions={listeningTestMockData.endPage.instruction}
            nextLink="/reading"
          />
        ),
      },

      // reading
      {
        path: "/reading",
        element: (
          <MainInstruction
            title={readingTestMockData.testName}
            instructions={readingTestMockData.mainInstruction}
            nextLink="/reading/video-instruction"
            prevLink="/"
            subtitle="Reading Test Instructions"
          />
        ),
      },
      {
        path: "/reading/video-instruction",
        element: (
          <VideoInstruction
            title="Reading Instruction Video"
            nextLink="/reading/demo-test"
            prevLink="/reading"
            videoSrc={readingTestMockData.videoInstruction}
          />
        ),
      },
      {
        path: "/reading/demo-test",
        element: <DemoReadingTest />,
      },
      {
        path: "/reading/:exerciseId",
        element: <ReadingExercise />,
      },
      {
        path: "/reading/end-page",
        element: (
          <EndPage
            title={readingTestMockData.endPage.title}
            instructions={readingTestMockData.endPage.instruction}
            nextLink="/writing"
          />
        ),
      },
      {
        path: "/reading/answer-key",
        element: (
          <ReadingAnswerKey
            data={readingTestMockData}
            title="Practice Test A - Reading Answer Key"
            nextLink="/reading/result"
          />
        ),
      },
      {
        path: "/reading/result",
        element: <Result title="Reading" nextLink="/reading/end-page" />,
      },

      // Writing
      {
        path: "/writing/:sectionId",
        element: <Writing />,
      },

      {
        path: "/writing/end-page",
        element: (
          <EndPage
            title={readingTestMockData.endPage.title}
            instructions={readingTestMockData.endPage.instruction}
            nextLink="/speaking"
          />
        ),
      },

      // Speaking
      {
        path: "/speaking",
        element: (
          <MainInstruction
            title={speakingTestData.testName}
            instructions={speakingTestData.mainInstruction}
            nextLink="/speaking/video-instruction"
            prevLink="/"
            subtitle="Speaking Test Instructions"
          />
        ),
      },
      {
        path: "/speaking/video-instruction",
        element: (
          <VideoInstruction
            title="Speaking Instruction Video"
            nextLink={`/speaking/demo-test`}
            prevLink="/speaking"
            videoSrc={speakingTestData.videoInstruction}
          />
        ),
      },
      {
        path: "/speaking/demo-test",
        element: <SpeakingDemoTest />,
      },
      {
        path: "/speaking/:exerciseId",
        element: <SpeakingExercise />,
      },
      {
        path: "/speaking/:exerciseId/instruction",
        element: <SpeakingInstructions />,
      },
      {
        path: "/speaking/end-page",
        element: (
          <EndPage
            title={speakingTestData.endPage.title}
            instructions={speakingTestData.endPage.instruction}
            nextLink="/"
          />
        ),
      },

      // complete
      {
        path: "/complete-test",
        element: (
          <VideoInstruction
            nextLink="/listening"
            title="Overview Instructional Video"
            prevLink="/"
            videoSrc={completeTestData.videoUrl}
          />
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
