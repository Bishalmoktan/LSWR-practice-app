import CardLayout from "@/components/card-layout";
import { ReadingTestData } from "@/types/reading"; // Adjust the import path accordingly
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckIcon, X } from "lucide-react";
import { useReadingContext } from "@/context/ReadingContext";

interface ReadingAnswerKeyPageProps {
  data: ReadingTestData;
  title: string;
  nextLink: string;
}

export default function ReadingAnswerKeyPage({
  data,
  title,
  nextLink,
}: ReadingAnswerKeyPageProps) {
  const { userAnswers } = useReadingContext(); 
  console.log(userAnswers)

  return (
    <CardLayout title={title} nextLink={nextLink}>
      <div className="p-4">
        {/* Alert Section */}
        <Alert className="mb-4 bg-customGray border border-customRed rounded-sm flex gap-2">
          <Badge className="bg-customRed hover:bg-customRed rounded-full h-fit">
            NOTE
          </Badge>
          <AlertDescription className="text-gray-600">
            Use the back arrow in your browser to return to the page you just
            came from. The back arrow is located at the top left of your screen,
            next to the address bar.
          </AlertDescription>
        </Alert>

        <Table className="text-gray-600 text-sm">
          <TableHeader>
            <TableRow>
              <TableHead>Question</TableHead>
              <TableHead>Answer Key</TableHead>
              <TableHead>Your Answer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.demoTest.exercise.map((e, index) => {
              const userAnswer = 0; 
              const correctAnswer = e.questions[0].correctAnswer;
              const isCorrect = userAnswer === correctAnswer;

              return (
                <TableRow key={`demo-${index}`}>
                  <TableCell>{`${data.demoTest.title} - Q${index + 1}`}</TableCell>
                  <TableCell>
                    {e.questions[0].options[correctAnswer]} 
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-between">
                      {userAnswer >= 0 ? (
                        <>
                          {e.questions[0].options[userAnswer]}
                          {isCorrect ? (
                            <CheckIcon
                              size={20}
                              className="text-green-500 ml-2 inline-block"
                            />
                          ) : (
                            <X
                              size={20}
                              className="text-red-500 ml-2 inline-block"
                            />
                          )}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div className="my-2 pl-2 text-sm">
          <Link to="/reading/demo-test" className="text-customRed hover:underline">
            Return to Practice Task
          </Link>
        </div>

        {data.exercise.map((exercise, index) => (
          <div key={index}>
            <Table className="text-gray-600 text-sm">
              <TableBody>
                {exercise.questions.map((question, questionIndex) => {
                  const userAnswer = userAnswers[questionIndex]; 
                  const correctAnswer = question.correctAnswer;
                  const isCorrect = userAnswer === correctAnswer;
                  
                  return (
                    <TableRow key={`${index}-${questionIndex}`}>
                      <TableCell>{`${exercise.title} - Q${questionIndex + 1}`}</TableCell>
                      <TableCell>
                        {question.options[correctAnswer]} 
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-between">
                          {userAnswer >= 0 ? (
                            <>
                              {question.options[userAnswer]}
                              {isCorrect ? (
                                <CheckIcon
                                  size={20}
                                  className="text-green-500 ml-2"
                                />
                              ) : (
                                <X
                                  size={20}
                                  className="text-red-500 ml-2 inline-block"
                                />
                              )}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <div className="my-2 pl-2 text-sm">
              <Link
                to={`/reading/${exercise.id}/audio/1`}
                className="text-customRed hover:underline"
              >
                Return to the beginning of Part {index + 1}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </CardLayout>
  );
}
