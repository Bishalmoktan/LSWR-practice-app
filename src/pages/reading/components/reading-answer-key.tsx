import CardLayout from "@/components/card-layout";
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
import { CheckIcon, X } from "lucide-react";
import { flattenReadingTest, getActualQuestionIndexReading } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useReadingContext } from "@/context/ReadingContext";

export default function ReadingAnswerKeyPage() {
  const { readingData, userAnswers } = useReadingContext();
  const data = flattenReadingTest(readingData);
  let currentIndex = 1;
  return (
    <CardLayout
      title={"Practice Test A - Reading Answer Key"}
      nextLink={"/reading/result"}
    >
      <div className="p-4">
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => {
              const answerIndex = userAnswers[index];
              const userAnswer =
                item.question.choices && item.question.choices[answerIndex];

              const correctAnswer = item.question.correctAnswer;
              let isCorrect = false;
              if (userAnswer) {
                isCorrect = userAnswer?.text === correctAnswer;
              }

              const prevItem = data[index - 1];
              if (prevItem && item.title !== prevItem.title) {
                currentIndex = 1;
              }

              return (
                <>
                  {prevItem && item.title !== prevItem.title && (
                    <div className="my-2 pl-2 text-sm">
                      <Link
                        to={`/reading/${getActualQuestionIndexReading(readingData, prevItem.title)?.toString()}`}
                        className="text-customRed hover:underline"
                      >
                        Return to {prevItem.title}
                      </Link>
                    </div>
                  )}
                  <TableRow key={`demo-${index}`}>
                    <TableCell>{`${item.title}- Q${currentIndex++}`}</TableCell>
                    <TableCell>                      
                        {item.question.correctAnswer}
                    </TableCell>
                    <TableCell className="">
                      <div className="flex justify-between">
                          <>
                            {answerIndex >= 0 &&
                              item.question.choices &&
                              item.question.choices[answerIndex].text}
                            {isCorrect ? (
                              <CheckIcon
                                size={20}
                                className="text-green-500 ml-2 inline-block"
                              />
                            ) : (
                              <>
                                {answerIndex >= 0 && (
                                  <X
                                    size={20}
                                    className="text-red-500 ml-2 inline-block"
                                  />
                                )}
                              </>
                            )}
                          </>
                      </div>
                    </TableCell>
                  </TableRow>
                  {index === data.length - 1 && (
                    <div className="my-2 pl-2 text-sm">
                      <Link
                        to={`/reading/${getActualQuestionIndexReading(readingData, prevItem.title)?.toString()}`}
                        className="text-customRed hover:underline"
                      >
                        Return to {prevItem.title}
                      </Link>
                    </div>
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </CardLayout>
  );
}
