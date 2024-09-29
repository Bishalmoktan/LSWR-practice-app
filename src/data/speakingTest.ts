import { SpeakingTestData } from "@/types/speaking";
import classroom from "@/assets/speaking/classroom.png";
import house1 from "@/assets/speaking/house-1.png";
import house2 from "@/assets/speaking/house-2.png";
import house3 from "@/assets/speaking/house-3.png";
import table from "@/assets/speaking/table.png";

export const speakingTestData: SpeakingTestData = {
  testName: "Practice Test A - Speaking Test",
  hasAnswerKey: false,
  startAudio:
    "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/S_Speaking_Start.ogg",
  endAudio:
    "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/S_Speaking_Stop.ogg",
  mainInstruction: [
    "For this sample test, you should use a timer to make sure that you complete each task within the given time.",
    "In this sample test, no score will be provided for any of the Speaking tasks, and your answers will not be recorded. If you wish to record your own answers, record and save your responses using your computer microphone or your own recording device (cellphone, digital recorder, etc.).",
    "On the official test, if you do not finish a task in the time provided, the screen will move to the next task. You cannot go back to the previous task. However, in this sample test, in order to move forward in the test you must click on “NEXT.”",
    "Try to complete this practice Speaking Test in around 20 minutes. For more information on test format, click here.",
  ],
  videoInstruction:
    "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Speaking.mp4",
  demoTest: {
    id: "1",
    title: "Practice Test A - Speaking Practice Task",
    prepartionTime: 30,
    recordingTime: 60,
    hasIntruction: false,
    type: "question",
    question: "Talk about one of your best friends.",
  },
  exercise: [
    {
      id: "1",
      title: "Practice Test A - Speaking Task 1: Giving Advice",
      prepartionTime: 30,
      recordingTime: 90,
      hasIntruction: false,
      type: "question",
      question:
        "A friend is looking for a summer job. Advise him about different ways he can find work for the summer.",
    },
    {
      id: "2",
      title:
        "Practice Test A - Speaking Task 2: Talking about a Personal Experience",
      prepartionTime: 30,
      recordingTime: 60,
      hasIntruction: false,
      type: "question",
      question:
        "Talk about a great time you had with a family member or friend. Maybe you can talk about a party, something you did together at school, a time you travelled with a friend, or anything else you can remember. What happened and why was it memorable?",
    },
    {
      id: "3",
      title: "Practice Test A - Speaking Task 3: Describing a Scene",
      prepartionTime: 30,
      recordingTime: 60,
      hasIntruction: false,
      type: "image",
      question:
        "Describe some things that are happening in the picture below as well as you can. The person with whom you are speaking cannot see the picture.",
      imageUrl: classroom,
    },
    {
      id: "4",
      title: "Practice Test A - Speaking Task 4: Making Predictions",
      prepartionTime: 30,
      recordingTime: 60,
      hasIntruction: false,
      type: "image",
      question:
        "In this picture, what do you think will most probably happen next?",
      imageUrl: classroom,
    },
    {
      id: "5",
      title: "Practice Test A - Speaking Task 5: Comparing and Persuading",
      prepartionTime: 60,
      selectionTime: 60,
      recordingTime: 60,
      hasIntruction: true,
      type: "comparsion",
      question: `Your family is relocating to another area, and you are looking for a new home there. You found two suitable options. Using the pictures and information below, choose the option that you prefer. In the next section, you will need to persuade a family member that your choice is the better choice.`,
      additionalInfo:
        "If you do not choose an option, the computer will choose one for you. You do not need to speak for this part.",
      instructions: ["Choose an option", "Preparation time", "Speaking"],
      images: [
        {
          id: "img1",
          name: "New Downtown Townhouse",
          features: [
            "$250,000",
            "3 bedrooms and 1 bathroom",
            "1,850 square feet",
            "close to public transportation and shopping malls",
          ],
          imageUrl: house1,
        },
        {
          id: "img2",
          name: "Detached Home in Quiet Neighbourhood",
          imageUrl: house2,
          features: [
            "$300,000",
            "3 bedrooms and 3 bathrooms",
            "2,800 square feet",
            "30 minutes from downtown; 5 minutes from shops",
          ],
        },
      ],
      comparison: {
        image: {
          id: "img3",
          name: "Charming Detached Home in the Country",
          imageUrl: house3,
          features: [
            "$210,000",
            "2 bedrooms and 1 bathroom",
            "1,000 square feet",
            "45 minutes from city; 25 minutes from shops",
          ],
        },
        info: "Your family is suggesting another house. Persuade your family member that what you chose is more suitable by comparing the two.",
      },
    },
    {
      id: "6",
      title:
        "Practice Test A - Speaking Task 6: Dealing with a Difficult Situation",
      prepartionTime: 60,
      recordingTime: 60,
      hasIntruction: false,
      type: "question",
      question:
        "A close cousin who lives in another country is coming to visit for a year. She tells you that she would like to stay at your place to explore your country’s culture and to spend some time with you. Your roommate does not agree, and says you will have to move out if she comes.",
      additionalInfo: `Choose ONE:
EITHER
Talk to your cousin. Explain why she cannot move in for a year.
OR
Talk to your roommate. Explain why your cousin should be allowed to move in with you for a year.`,
    },
    {
      id: "7",
      title: "Practice Test A - Speaking Task 7: Expressing Opinions",
      prepartionTime: 60,
      recordingTime: 90,
      hasIntruction: false,
      type: "question",
      question: "Answer the following question.",
      additionalInfo:
        "Question: Do you think that young adults should pay rent to their parents if they do not move out by the age of 21? Explain your reasons.",
    },
    {
      id: "8",
      title:
        "Practice Test A - Speaking Task 8: Describing an Unusual Situation",
      prepartionTime: 30,
      recordingTime: 60,
      hasIntruction: false,
      type: "image",
      question:
        "You are in a furniture store and you see a table you would like to buy, but the store clerk won’t let you take a photo. Phone a member of your family. Provide a full and clear description of the table and ask if you can buy the table.",
      imageUrl: table,
    },
  ],
  endPage: {
    title: "",
    instruction: [
      `This is the end of the Speaking Test.`,
      `Click here to view the Performance Standards for Speaking.`,
    ],
  },
};
