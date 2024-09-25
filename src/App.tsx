import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "./pages/home/home";
import ListeningPage from "./pages/listening/listening";
import ListeningPart from "./pages/listening/components/listening-part";
import VideoInstruction from "./pages/listening/components/video-instruction";
import DemoTest from "./pages/listening/components/demo-test";
// Import other sections if needed (e.g., ReadingSection, WritingSection, SpeakingSection)

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
        path: "/listening",
        element: <ListeningPage />,
      },
      {
        path: "/listening/video-instruction",
        element: <VideoInstruction />,
      },
      {
        path: "/listening/demo-test",
        element: <DemoTest />,
      },
      {
        path: "/listening/:partNumber",
        element: <ListeningPart />,
      },
      // Uncomment and add other routes as needed
      // {
      //   path: "reading/*",
      //   element: <ReadingSection />,
      // },
      // {
      //   path: "writing/*",
      //   element: <WritingSection />,
      // },
      // {
      //   path: "speaking/*",
      //   element: <SpeakingSection />,
      // },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
