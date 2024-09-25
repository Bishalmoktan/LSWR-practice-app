import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"
import AudioSection from "./audio-section";
import QuestionSection from "./question-section";

const DemoTest = () => {
    const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <Card className="bg-white shadow overflow-hidden rounded-none">
      <CardHeader className="flex flex-row justify-between bg-gray-200 py-2">
        <h2 className="font-semibold text-gray-600">
          Listening Instruction Video
        </h2>
        <Link
        to={"/listening/1"}
        >
        <Button
          className="bg-customBlue hover:bg-customDarkBlue px-2 h-6 text-sm text-white rounded-none"
          >
          Next
        </Button>
          </Link>
      </CardHeader>
      <CardContent className="flex justify-evenly text-customLightBlue text-lg min-h-[70vh]  p-0">
        
        <AudioSection />
        <QuestionSection />
        
      
      </CardContent>
      <CardFooter className="flex justify-end py-2 bg-customGray">
          <Button 
            className="bg-customRed hover:bg-customRed/90 px-2 h-6 text-sm text-white rounded-none"
            onClick={() => navigate("/listening/video-instruction")}
          >
            Back
          </Button>
        </CardFooter>
    </Card>
  </section>
  )
}
export default DemoTest