import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// Assuming listeningTestMockData is imported or available in this scope
import listeningTestMockData from "@/data/listeningTest";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function ListeningPage() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="bg-white shadow overflow-hidden rounded-none">
        <CardHeader className="flex flex-row justify-between bg-gray-200 py-2">
          <h2 className="font-semibold text-gray-600">
            {listeningTestMockData.testName}
          </h2>
          <Link to={"/listening/video-instruction"}>
            <Button className="bg-customBlue hover:bg-customDarkBlue px-2 h-6 text-sm text-white rounded-none">
              Next
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="py-8 text-customLightBlue text-lg min-h-[70vh]">
          <div className=" flex items-center gap-2 mb-4">
            <Info />
            <h3 className="">Instructions:</h3>
          </div>
          <ul className="list-disc pl-5 mb-4">
            {listeningTestMockData.mainInstruction.map((instruction, index) => (
              <li className="border-b border-dashed py-4" key={index}>
                {instruction}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-end py-2 bg-customGray">
          <Button
            className="bg-customRed hover:bg-customRed/90 px-2 h-6 text-sm text-white rounded-none"
            disabled
          >
            Back
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
