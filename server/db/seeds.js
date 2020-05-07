use education_hub;
db.dropDatabase();

db.education.insertMany([
  {
    "category": "Mythology",
    "youtubeURL": "LINK",
    "questions": [
                {"question1":"How do you introduce yourself?",
                "correct_answer": "blah",
                "answer1":"blah, blah, blah",
                "answer2":"blah",
                "answer3":"blah"
              }
              ]
  }
//   {
//     catagory: "Japanese Language",
//     youtubeURL: "LINK",
//     questions:[
//               {"question1":"How do you introduce yourself?",
//                "correct_answer"" "blah",
//                "answer1":"blah, blah, blah",
//                "answer2":"blah",
//                "answer3":"blah"
//                 },
//                 {
//                "question2": etc...
//                "question3": etc...
//                "question4": etc...
//                "question5": etc...
//                "question10": etc...
//               }]
//   },
//   {
//     catagory: "Classical Studies",
//     youtubeURL: "LINK",
//     questions: [
//                {"question1":"How do you introduce  yourself?",
//                 "correct_answer" "blah",
//                 "answer1":"blah, blah, blah",
//                 "answer2":"blah",
//                 "answer3":"blah"
//                 },
//                 {
//                 "question2": etc...
//                 "question3": etc...
//                 "question4": etc...
//                 "question5": etc...
//                 "question10": etc...
//                 }]
//   }
]);
