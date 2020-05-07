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
  },
  {
    catagory: "Japanese Language",
    youtubeURL: https:"www.youtube.com/watch?v=66P5_R37vek",
    questions:[
              {"question1":"How do you say, I understand?",
               "correct_answer": "わかりました",
               "answer1":"わかりません",
               "answer2":"わかりました",
               "answer3":"わたしわ",
               "answer4":"わがまま"
                },
              {"question2":"How do you say, Thank you?",
               "correct_answer": "ありがとう",
               "answer1":"ありがとう",
               "answer2":"あたこと",
               "answer3":"あさです",
               "answer4":"あした"
              },
              {"question3":"How do you say, Good Morning",
               "correct_answer":"おはよう",
               "answer1":"おねがい",
               "answer2":"おんぶ",
               "answer3":"おっさん",
               "answer4":"おはよう"
              },
              {"question4":"How do you say, yes?",
               "correct_answer":"はい",
               "answer1":"はな",
               "answer2":"はい",
               "answer3":"はは",
               "answer4":"はなび"
             },
             {"question5":"How do you say, no?",
              "correct_answer":"いええ",
              "answer1":"いえない",
              "answer2":"いただきます",
              "answer3":"いええ",
              "answer4":"いよ"
             }
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
