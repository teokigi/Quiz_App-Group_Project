use education_hub;
db.dropDatabase();

db.education.insertMany([
  {
    "category": "Biology: The Ecosystem",
    "youtubeURL": "https://youtu.be/eGG7hyx_HlA",
    "questions":[
                {"question1":"What element in an Ecosystem is know as a Primary Producer?",
                "correct_answer": "Plants",
                "answer1":"Insects",
                "answer2":"Mammals",
                "answer3":"Atmosphere",
                "answer4":"Plants"
                }
                {"question2":"Which of these would be known as a Consumer?",
                "correct_answer": "Wolf",
                "answer1":"Dung Beetle",
                "answer2":"Wolf",
                "answer3":"Giraffe",
                "answer4":"All of These"
                }
                {"question3":"What is the primary method of Consumers to return nutrients to the Primary Producers?",
                "correct_answer": "Death",
                "answer1":"Eating",
                "answer2":"Excretion",
                "answer3":"Death",
                "answer4":"Breathing"
                }
                {"question4":"What makes an Ecosystem stable?",
                "correct_answer": "Diversity",
                "answer1":"Biotic Bias",
                "answer2":"Diversity",
                "answer3":"Abiotic Bias",
                "answer4":"Simplicity"
                }
                {"question5":"How old are some Coral Reefs?",
                "correct_answer": "500 Million Years",
                "answer1":"50 Million Years",
                "answer2":"5 Million Years",
                "answer3":"500 Million Years",
                "answer4":"500,000 Years"
                }]
              },
  {
    "category": "Language: Japanese",
    "youtubeURL":"https://www.youtube.com/watch?v=66P5_R37vek",
    "questions":[
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
             }]
           },
  {
    "category": "Classical Studies: The Odyssey",
    "youtubeURL": "https://youtu.be/MS4jk5kavy4",
    "questions": [
               {"question1":"In which century was the Odyssey and Iliad  written?",
                "correct_answer": "8th",
                "answer1":"7th",
                "answer2":"9th",
                "answer3":"10th",
                "answer4":"8th"
                },
                {"question2":"What is the name of the cyclops in the Odyssey?",
                "correct_answer": "Polyphemus",
                "answer1":"Polyphemus",
                "answer2":"Scylla",
                "answer3":"Charibdis",
                "answer4":"The Lotus Eater"
                },
                {"question3":"How does Odysseus get revenge on the cyclops for eating his men?",
                "correct_answer": "Blinds him",
                "answer1":"Cuts off his feet",
                "answer2":"Cuts out his tongue",
                "answer3":"Blinds him",
                "answer4":"Cuts off his hands"
                },
                {"question4":"What name did Odysseus give when he met the cyclops?",
                "correct_answer": "Noman",
                "answer1":"Norman",
                "answer2":"Odysseus",
                "answer3":"Odie",
                "answer4":"Noman"
                },
                {"question5":"At the start of the Odyssey, which Nymph has imprisoned Odysseus on the Isle of Ogygia?",
                "correct_answer": "Calypsso",
                "answer1":"Thetis",
                "answer2":"Calypsso",
                "answer3":"Aegina",
                "answer4":"Noman"
                }]
              }
            ]);
