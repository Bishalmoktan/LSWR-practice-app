const listeningTestMockData = {
  testName: "Practice Test A - Listening Test",
  mainInstruction: [
    "On the official test, once you leave a page, you cannot go back to it to change your answers. However, in this sample test, you can.",
    "For more information on test format, click here.",
    "Please note that the order of question types on the official test may differ from the order presented here.",
    "This Listening Test is identical in format to the official test except that the Listening section of the official test may be slightly longer as it might contain additional questions included for research and development purposes.",
  ],
  videoInstruction:
    "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Listening.mp4",
  demoTest: {
    audioUrl:
      "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L_Practice_01.ogg",
    question: [
      {
        time: 20,
        questionText:
          "Choose the sentence that is closest in meaning to the statement.",
        options: [
          { type: "text", value: "I want to see the concert again." },
          { type: "text", value: "I didn’t attend the concert." },
          { type: "text", value: "The concert was cancelled." },
          { type: "text", value: "The concert wasn’t good." },
        ],
        correctAnswer: 1, // Index of the correct answer
      },
    ],
  },
  parts: [
    {
      partNumber: 1,
      title: "Listening to Problem Solving",
      instruction: [
        "You will hear a conversation in 3 sections. You will hear each section only once.",
        "After each section, you will hear 2 or 3 questions. You will hear the questions only once.",
        "Choose the best answer to each question.",
      ],
      audioUrl:
        "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/NL1_Instructions.mp3",
      subInstruction:
        "You will hear a conversation between a woman and a man. The man is a bus driver and the woman is a passenger trying to get somewhere.",
      sections: [
        {
          sectionNumber: 1,
          audioUrl: "https://example.com/part1-section1.mp3",
          questions: [
            {
              questionText: "What is the speaker talking about?",
              options: [
                { type: "text", value: "Option 1" },
                { type: "text", value: "Option 2" },
                { type: "image", value: "https://example.com/image1.png" },
                { type: "image", value: "https://example.com/image2.png" },
              ],
              correctAnswer: 0,
            },
            // Add more questions if needed
          ],
        },
        {
          sectionNumber: 2,
          audioUrl: "https://example.com/part1-section2.mp3",
          questions: [
            {
              questionText: "Which image represents the sound?",
              options: [
                { type: "image", value: "https://example.com/image3.png" },
                { type: "image", value: "https://example.com/image4.png" },
              ],
              correctAnswer: 1,
            },
          ],
        },
      ],
    },
    // {
    //   partNumber: 2,
    //   instruction: "In this part, you will hear an audio clip and answer the questions.",
    //   subInstruction: "This audio contains multiple questions.",
    //   sections: [
    //     {
    //       sectionNumber: 1,
    //       audioUrl: "https://example.com/part2-section1.mp3",
    //       questions: [
    //         {
    //           questionText: "What does the speaker mean?",
    //           options: [
    //             { type: "text", value: "Option A" },
    //             { type: "text", value: "Option B" },
    //             { type: "text", value: "Option C" },
    //           ],
    //           correctAnswer: 2,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   partNumber: 3,
    //   instruction: "In this part, listen to the following audio and choose the correct option.",
    //   subInstruction: "Answer all questions based on the audio.",
    //   sections: [
    //     {
    //       sectionNumber: 1,
    //       audioUrl: "https://example.com/part3-section1.mp3",
    //       questions: [
    //         {
    //           questionText: "What sound do you hear?",
    //           options: [
    //             { type: "text", value: "Sound A" },
    //             { type: "text", value: "Sound B" },
    //           ],
    //           correctAnswer: 0,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   partNumber: 4,
    //   instruction: "In this part, choose the correct answer from the dropdown menu.",
    //   subInstruction: "Pay attention to the audio.",
    //   sections: [
    //     {
    //       sectionNumber: 1,
    //       audioUrl: "https://example.com/part4-section1.mp3",
    //       questions: [
    //         {
    //           questionText: "Select the correct answer:",
    //           options: ["Dropdown Option 1", "Dropdown Option 2", "Dropdown Option 3"],
    //           correctAnswer: 1,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default listeningTestMockData;
