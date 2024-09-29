import { WritingTestData } from "@/types/writing";

export const writingTestMockData: WritingTestData = {
  testName: "Practice Test A - Writing Test",
  hasAnswerKey: false,
  mainInstruction: [
    `On the official test, if you do not finish Task 1 in 27 minutes, the screen will move to Task 2. You cannot go back to Task 1. However, in this sample test, in order to move forward in the test you must click on "NEXT."`,
    `You have 53 minutes to complete this practice Writing Test. For more information on test format, click here.`,
  ],
  videoInstruction:
    "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Writing.mp4",
  exercise: [
    {
      title: "Practice Test A - Writing Task 1: Writing an Email",
      id: "1",
      type: "no-option",
      time: 1140,
      scenarioInfo: "Read the following information.",
      scenario:
        "You recently made reservations for dinner at a very famous and expensive restaurant in town. However, the meal and the service were terrible. The restaurant manager was not available to solve the problem, so you left without a resolution.",
      question:
        "Write an email to the restaurant's manager in about 150-200 words. Your email should do the following things:",
      questionInstruction: [
        "State what problems you had with the food you ordered.",
        "Complain about the service.",
        "Describe how you want the restaurant to resolve the problem to your satisfaction.",
      ],
    },
    {
      id: "2",
      title: "Practice Test A - Writing Task 2: Responding to Survey Questions",
      type: "option",
      time: 1560,
      scenarioInfo: "Read the following information.",
      scenario: `City Development Survey

You live in a small town of 10,000 people. A large green area in the centre of town is undeveloped. The city has sent out an opinion survey to see what residents would like to have built in that area.`,
      question:
        "Choose the option that you prefer. Why do you prefer your choice? Explain the reasons for your choice. Write about 150-200 words.",
      options: [
        "Shopping Complex: This shopping mall would include restaurants, a large supermarket, and a movie theatre.",
        "Recreational Park: This park would include a sports complex, a large green area, and a small petting zoo.",
      ],
    },
  ],
  endPage: {
    title: "Practice Test A - End of the Writing Test",
    instruction: [
      `This is the end of the Writing Test.`,
      `Click "NEXT" to continue.`,
    ],
  },
};
