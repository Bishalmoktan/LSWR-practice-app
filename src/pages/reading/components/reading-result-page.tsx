import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {  flattenReadingTest } from "@/lib/utils";
import CardLayout from "@/components/card-layout";
import { useLocation } from "react-router-dom";
import { useReadingContext } from "@/context/ReadingContext";


const ReadingResult = () => {
  const { userAnswers, readingData } = useReadingContext();
  const questions = flattenReadingTest(readingData);
  const totalQuestions = questions.length;
  const totalScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (
        answer >= 0 && 
        questions[index].question.choices && 
        (
          questions[index].question.choices[answer].text === questions[index].question.correctAnswer 
        )
      ) {
        score += 1;
      }
      
    });
    return score;
  };

  const location = useLocation();

  return (
    <CardLayout
        title={`Practice Test A - Your Reading CELPIP Score`}
        nextLink={"/reading/end-page"}
        prevLink={location.pathname}
    >

<div className="py-2 px-8 space-y-16">

        <Card className="rounded-none border border-gray-300 border-b-0">
        <h1 className="text-center py-2 bg-[#CECBC7] font-medium">CELPIP-GENERAL READING TEST</h1>
          <Table>
            <TableHeader >
                <TableHead className="text-black text-center">Number of Questions</TableHead>
                <TableHead className="text-black text-center">Your Score</TableHead>
                <TableHead className="text-black text-center">Your Approximate CELPIP Score</TableHead>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-black text-center font-medium">{totalQuestions}</TableCell>
                <TableCell className="text-black text-center font-medium">{totalScore()}</TableCell>
                <TableCell className="text-black text-center font-medium">M</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>


      <Card  className="rounded-none border-2 border-gray-300 bg-customLighGray">
        <CardHeader className="text-center py-4 font-semibold">A Note About Your CELPIP Score</CardHeader>
        <CardContent>
          <p className="tracking-tight">
            The score provided here is an estimate based on the <span className="text-customRed hover:underline cursor-pointer">Reading Test
            Score Conversion Chart.</span> Each CELPIP test item is field tested and
            reviewed by an expert panel before it is integrated into the
            official test. Since questions may have different levels of
            difficulty and may therefore be equated differently, the raw score
            required for a certain level may vary slightly from one test to
            another.
          </p>
        </CardContent>
      </Card>

</div>


    </CardLayout>

  );
};

export default ReadingResult;