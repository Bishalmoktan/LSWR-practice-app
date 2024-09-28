import { SpeakingTestData } from "@/types/speaking";
import classroom from "@/assets/speaking/classroom.png";

export const speakingTestData: SpeakingTestData = {
    testName: "Practice Test A - Speaking Test",
    startAudio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/S_Speaking_Start.ogg",
    endAudio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/S_Speaking_Stop.ogg",
    mainInstruction: ["For this sample test, you should use a timer to make sure that you complete each task within the given time.", "In this sample test, no score will be provided for any of the Speaking tasks, and your answers will not be recorded. If you wish to record your own answers, record and save your responses using your computer microphone or your own recording device (cellphone, digital recorder, etc.).",
    "On the official test, if you do not finish a task in the time provided, the screen will move to the next task. You cannot go back to the previous task. However, in this sample test, in order to move forward in the test you must click on “NEXT.”",
    "Try to complete this practice Speaking Test in around 20 minutes. For more information on test format, click here."
    ],
    videoInstruction: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Speaking.mp4",
    demoTest: {
      id: "1",
        title: "Practice Test A - Speaking Practice Task",
        prepartionTime: 30,
        recordingTime: 60,
        hasIntruction: false,
        type: "question",
        question: "Talk about one of your best friends."
    },
    exercise: [
      {
        id: "1",
        title: "Practice Test A - Speaking Task 1: Giving Advice",
        prepartionTime: 30,
        recordingTime: 90,
        hasIntruction: false,
        type: "question",
        question: "A friend is looking for a summer job. Advise him about different ways he can find work for the summer."
      },
      {
        id: "2",
        title: "Practice Test A - Speaking Task 2: Talking about a Personal Experience",
        prepartionTime: 30,
        recordingTime: 60,
        hasIntruction: false,
        type: "question",
        question: "Talk about a great time you had with a family member or friend. Maybe you can talk about a party, something you did together at school, a time you travelled with a friend, or anything else you can remember. What happened and why was it memorable?"
      },
      {
        id: "3",
        title: "Practice Test A - Speaking Task 3: Describing a Scene",
        prepartionTime: 30,
        recordingTime: 60,
        hasIntruction: false,
        type: "image",
        question: "Describe some things that are happening in the picture below as well as you can. The person with whom you are speaking cannot see the picture.",
        imageUrl: classroom
        
      },
      {
        id: "4",
        title: "Practice Test A - Speaking Task 4: Making Predictions",
        prepartionTime: 30,
        recordingTime: 60,
        hasIntruction: false,
        type: "image",
        question: "In this picture, what do you think will most probably happen next?",
        imageUrl: classroom
        
      },
      // {
      //   id: "",
      //   title: "Image Comparison",
      //   prepartionTime: 120,
      //   recordingTime: 180,
      //   hasIntruction: true,
      //   type: "comparsion",
      //   question: "Compare these two images and describe their differences.",
      //   instructions: ["Focus on the key features.", "Explain why one image stands out."],
      //   images: [
      //     {
      //       id: "img1",
      //       name: "Image A",
      //       features: ["Mountain view", "Clear sky"]
      //     },
      //     {
      //       id: "img2",
      //       name: "Image B",
      //       features: ["Beach view", "Cloudy sky"]
      //     }
      //   ]
      // }
    ]
  };
  