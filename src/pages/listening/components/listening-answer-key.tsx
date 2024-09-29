import CardLayout from "@/components/card-layout";
import { ListeningTestData } from "@/types/listening";
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
import { useListeningContext } from "@/context/ListeningContext";
import { getFlattenedQuestionIndex } from "@/lib/utils";
import listeningTestMockData from "@/data/listeningTest";

interface AnswerKeyPageProps {
  data: ListeningTestData;
  title: string;
  nextLink: string;
}

export default function AnswerKeyPage({
  data,
  title,
  nextLink,
}: AnswerKeyPageProps) {
  const { userAnswers, demoAnswer } = useListeningContext();

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
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.demoTest.questions.map((question, index) => {
              const userAnswer = demoAnswer;
              const correctAnswer = question.correctAnswer;
              const isCorrect = userAnswer === correctAnswer;

              return (
                <TableRow key={`demo-${index}`}>
                  <TableCell>{`${data.demoTest.title}- Q${index + 1}`}</TableCell>
                  <TableCell>
                    {question.options[correctAnswer].type === "image" ? (
                      <img
                        src={question.options[correctAnswer].value}
                        alt="Correct answer"
                        className="w-24 h-24 object-cover"
                      />
                    ) : (
                      question.options[correctAnswer].value
                    )}
                  </TableCell>
                  <TableCell className="">
                    <div className="flex justify-between">
                      {userAnswer >= 0 &&
                      question.options[userAnswer].type === "image" ? (
                        <>
                          <img
                            src={question.options[userAnswer].value}
                            alt="User answer"
                            className="w-24 h-24 object-cover"
                          />
                          {isCorrect ? (
                            <CheckIcon
                              size={20}
                              className="text-green-500 ml-2 inline-block"
                            />
                          ) : (
                            <>
                              {userAnswer >= 0 && (
                                <X
                                  size={20}
                                  className="text-red-500 ml-2 inline-block"
                                />
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {userAnswer >= 0 &&
                            question.options[userAnswer].value}
                          {isCorrect ? (
                            <CheckIcon
                              size={20}
                              className="text-green-500 ml-2 inline-block"
                            />
                          ) : (
                            <>
                              {userAnswer >= 0 && (
                                <X
                                  size={20}
                                  className="text-red-500 ml-2 inline-block"
                                />
                              )}
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div className="my-2 pl-2 text-sm">
          <Link to="/listening/demo-test" className="text-customRed hover:underline">
            Return to Practice Task
          </Link>
        </div>

        {data.parts.map((part, index) => {
          const allQuestions = part.sections
            .flatMap((section) =>
              section.questions.map((question, index) => ({
                question,
                questionNumber:
                  index +
                  1 +
                  (section.sectionNumber - 1) * section.questions.length,
                partTitle: part.title,
                partNumber: part.partNumber,
                sectionNumber: section.sectionNumber,
              }))
            )
            .sort((a, b) => a.questionNumber - b.questionNumber);

          return (
            <div key={part.partNumber} className="">
              <Table className="text-gray-600 text-sm">
                <TableBody>
                  {allQuestions.map(
                    ({ question, questionNumber, partNumber, sectionNumber  }, index) => {
                      const questionIndex = getFlattenedQuestionIndex(listeningTestMockData, partNumber, sectionNumber, questionNumber);
                      const userAnswer = questionIndex ? userAnswers[questionIndex] : -1;
                      const correctAnswer = question.correctAnswer;
                      const isCorrect = userAnswer === correctAnswer;
                      return (
                        <TableRow key={`${part.partNumber}-${index}`}>
                          <TableCell>{`${part.title} - Q${questionNumber}`}</TableCell>
                          <TableCell>
                            {question.options[correctAnswer].type ===
                            "image" ? (
                              <img
                                src={question.options[correctAnswer].value}
                                alt="Correct answer"
                                className="w-24 h-24 object-cover"
                              />
                            ) : (
                              question.options[correctAnswer].value
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-between">
                              {userAnswer >= 0 &&
                              question.options[userAnswer].type === "image" ? (
                                <>
                                  <img
                                    src={question.options[userAnswer].value}
                                    alt="User answer"
                                    className="w-24 h-24 object-cover"
                                  />
                                  {isCorrect ? (
                                    <CheckIcon
                                      size={20}
                                      className="text-green-500 ml-2"
                                    />
                                  ) : (
                                    <>
                                      {userAnswer >= 0 && (
                                        <X
                                          size={20}
                                          className="text-red-500 ml-2 inline-block"
                                        />
                                      )}
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {userAnswer >= 0 &&
                                    question.options[userAnswer].value}
                                  {isCorrect ? (
                                    <CheckIcon
                                      size={20}
                                      className="text-green-500 ml-2"
                                    />
                                  ) : (
                                    <>
                                      {userAnswer >= 0 && (
                                        <X
                                          size={20}
                                          className="text-red-500 ml-2 inline-block"
                                        />
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>

              <div className="my-2 pl-2 text-sm">
                <Link
                  to={`/listening/${part.partNumber}/audio/1`}
                  className="text-customRed hover:underline"
                >
                  Return to the beginning of the Part {index + 1}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </CardLayout>
  );
}
