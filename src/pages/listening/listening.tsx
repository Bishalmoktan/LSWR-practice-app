import listeningTestMockData from "@/data/listeningTest";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import ListeningCardLayout from "./components/listening-page-layout";

export default function ListeningPage() {
  return (
   
        <ListeningCardLayout
        title={listeningTestMockData.testName}
        nextLink="/listening/video-instruction"

        >

          <div className=" flex items-center gap-2 font-medium text-customLightBlue px-8 pt-4">
            <Info />
            <h3 className="">Listening Test Instructions</h3>
          </div>
          <ul className="list-disc pl-24 mb-4 max-w-[70%]">
            {listeningTestMockData.mainInstruction.map((instruction, index) => (
              <li className={cn("py-4 font-medium text-customLightBlue", index != listeningTestMockData.mainInstruction.length - 1 && "border-b border-dashed")} key={index}>
                {instruction}
              </li>
            ))}
          </ul>

        </ListeningCardLayout>


  );
}
