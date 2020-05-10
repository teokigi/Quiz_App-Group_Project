use education_hub;
db.dropDatabase();

db.users.insertMany([
  {
    "nickname": "Tangtastic_T-Dawg",
    "emailAddress": "tdawg@hotmail.com",
    "password": "tonylovestotest",
    "correctAnswers": 24,
    "wrongAnswers": 8
  },
  {
    "nickname": "Krizzy-Pears",
    "emailAddress": "cpears@gmail.com",
    "password": "pears2me",
    "correctAnswers": 31,
    "wrongAnswers": 11
  },
  {
    "nickname": "BlueWales89",
    "emailAddress": "mwales@outlook.com",
    "password": "bigwales123",
    "correctAnswers": 16,
    "wrongAnswers": 28
  }
]),

db.education.insertMany([
  {
    "category": "Biology: The Ecosystem",
    "youtubeURL": "https://youtube.com/embed/eGG7hyx_HlA",
    "questions":[
                  {
                    "question":"What element in an Ecosystem is know as a Primary Producer?",
                    "correct_answer": "Plants",
                    "answers": ["Insects","Mammals","Atmosphere","Plants"]
                  },
                  {
                    "question":"Which of these would be known as a Consumer?",
                    "correct_answer": "Wolf",
                    "answers": ["Dung Beetle", "Wolf", "Giraffe", "All of These"]
                  },
                  {
                    "question":"What is the primary method of Consumers to return nutrients to the Primary Producers?",
                    "correct_answer": "Death",
                    "answers": ["Eating","Excretion","Death","Breathing"]
                  },
                  {
                    "question":"What makes an Ecosystem stable?",
                    "correct_answer": "Diversity",
                    "answers": ["Biotic Bias", "Diversity", "Abiotic Bias", "Simplicity"]
                  },
                  {
                    "question":"How old are some Coral Reefs?",
                    "correct_answer": "500 Million Years",
                    "answers": ["50 Million Years","5 Million Years","500 Million Years","500,000 Years"]
                  }
                ]
  },
  {
    "category": "Language: Japanese",
    "youtubeURL": "https://www.youtube.com/embed/66P5_R37vek",
    "questions":[
                  {
                    "question":"How do you say, I understand?",
                    "correct_answer": "わかりました",
                    "answers": ["わかりません", "わかりました", "わたしわ", "わがまま"]
                  },
                  {
                    "question":"How do you say, Thank you?",
                    "correct_answer": "ありがとう",
                    "answers": ["ありがとう","あたこと","あさです","あした"]

                  },
                  {
                    "question":"How do you say, Good Morning",
                    "correct_answer":"おはよう",
                    "answers": ["おねがい", "おんぶ", "おっさん", "おはよう"]
                  },
                  {
                    "question":"How do you say, yes?",
                    "correct_answer":"はい",
                    "answers": ["はな", "はい", "はは", "はなび"]
                  },
                  {
                    "question":"How do you say, no?",
                    "correct_answer":"いええ",
                    "answers": ["いえない", "いただきます", "いええ", "いよ"]
                  }
                ]
  },
  {
    "category": "Classical Studies: The Odyssey",
    "youtubeURL": "https://youtube.com/embed/MS4jk5kavy4",
    "questions":[
                  {
                    "question":"In which century was the Odyssey and Iliad  written?",
                    "correct_answer": "8th",
                    "answers": ["7th", "9th", "10th", "8th"]
                  },
                  {
                    "question":"What is the name of the cyclops in the Odyssey?",
                    "correct_answer": "Polyphemus",
                    "answers": ["Polyphemus", "Scylla", "Charibdis", "The Lotus Eater"]
                  },
                  {
                    "question":"How does Odysseus get revenge on the cyclops for eating his men?",
                    "correct_answer": "Blinds him",
                    "answers": ["Cuts off his feet", "Cuts out his tongue", "Blinds him", "Cuts off his hands"]
                  },
                  {
                    "question":"What name did Odysseus give when he met the cyclops?",
                    "correct_answer": "Noman",
                    "answers": ["Norman", "Odysseus", "Odie", "Noman"]
                  },
                  {
                    "question":"At the start of the Odyssey, which Nymph has imprisoned Odysseus on the Isle of Ogygia?",
                    "correct_answer": "Calypsso",
                    "answers": ["Thetis", "Calypsso", "Aegina", "Noman"]
                  }
                ]
  }
]);
