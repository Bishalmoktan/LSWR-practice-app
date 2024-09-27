import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "./pages/home/home";
import ListeningPart from "./pages/listening/components/listening-part";
import VideoInstruction from "./components/video-instruction";
import DemoTest from "./pages/listening/components/demo-test";
import Instructions from "./pages/listening/components/instruction";
import AudioPlayingPage from "./pages/listening/components/audio-playing-page";
import QuestionPage from "./pages/listening/components/question-page";
import Preparation from "./pages/listening/components/preparation";
import listeningTestMockData from "./data/listeningTest";
import MainInstruction from "./components/main-instruction";
import { readingTestMockData } from "./data/readingTest";
import DemoReadingTest from "./pages/reading/components/demo-test";
import ReadingExercise from "./pages/reading/components/reading-exercise";
import { writingTestMockData } from "./data/writingTest";
import WritingExercise from "./pages/writing/components/writing-exercise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // Listening
      {
        path: "/listening",
        element: <MainInstruction
          title={listeningTestMockData.testName}
          instructions={listeningTestMockData.mainInstruction}
          nextLink="/listening/video-instruction"
          prevLink="/"
          subtitle="Listening Test Instructions"
        />,
      },
      {
        path: "/listening/video-instruction",
        element: <VideoInstruction
        title="Listening Instruction Video"
        nextLink="/listening/demo-test"
        prevLink="/listening"
        videoSrc={listeningTestMockData.videoInstruction}

        />,
      },
      {
        path: "/listening/demo-test",
        element: <DemoTest />,
      },
      {
        path: "/listening/:partNumber",
        element: <ListeningPart />,
      },
      {
        path: "/listening/:partNumber/instruction",
        element: <Instructions />,
      },
      {
        path: "/listening/:partNumber/audio/:sectionNumber",
        element: <AudioPlayingPage />,
      },
      {
        path: "/listening/:partNumber/section/:sectionNumber/preparation",
        element: <Preparation />,
      },
      {
        path: "/listening/:partNumber/section/:sectionNumber/question/:questionNumber",
        element: <QuestionPage />,
      },


      // reading
      {
        path: "/reading",
        element: <MainInstruction
          title={readingTestMockData.testName}
          instructions={readingTestMockData.mainInstruction}
          nextLink="/reading/video-instruction"
          prevLink="/"
          subtitle="Reading Test Instructions"
        />,
      },
      {
        path: "/reading/video-instruction",
        element: <VideoInstruction
        title="Reading Instruction Video"
        nextLink="/reading/demo-test"
        prevLink="/reading"
        videoSrc={readingTestMockData.videoInstruction}

        />,
      },
      {
        path: "/reading/demo-test",
        element: <DemoReadingTest />,
      },
      {
        path: "/reading/:exerciseId",
        element: <ReadingExercise />,
      },

      

      // Writing
      {
        path: "/writing",
        element: <MainInstruction
          title={writingTestMockData.testName}
          instructions={writingTestMockData.mainInstruction}
          nextLink="/writing/video-instruction"
          prevLink="/"
          subtitle="Writing Test Instructions"
        />,
      },
      {
        path: "/writing/video-instruction",
        element: <VideoInstruction
        title="Writing Instruction Video"
        nextLink={`/writing/1`}
        prevLink="/writing"
        videoSrc={writingTestMockData.videoInstruction}

        />,
      },
      {
        path: "/writing/:exerciseId",
        element: <WritingExercise />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
