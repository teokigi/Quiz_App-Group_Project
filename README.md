# ABOUT THE PROJECT
This is an app designed to be an educational hub to help students in the primary or secondary education system with interactive learning. A client can customise the content including revision material, test topics, test questions amongst other things. The app will generate a visual representation of the student's scores in different topics to inspire learning and encourage continued development.

The brief is as follows:

## Educational App
The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app.

## MVP
A user should be able to:

- View some educational content on a particular topic.
- Be able to interact with the page to move through different sections of content.

## Possible Extensions
- Use an API to bring in content or a database to store information.
- Use charts or maps to display your information to the page.

# HOW TO RUN THE APP

### NOTE: The app was tested in Google Chrome and so it is advised to use Chrome when navigating.

A. Download the Repo using the green "Clone or Download" button at the top right of this project's GitHub page.
B. Using Terminal (or another CLI) navigate to the "project" folder and then the "server" folder and run the following commands:
      1) npm i
      2) npm i mongodb express body-parser
      3) npm i -D cors nodemon
      4) npm run seeds
      5) npm run server:dev
      6) run mongod
C. Open another tab in your CLI and navigate one level up before navigating to the "client" folder and run the following commands:
      1) npm i
      2) npm run serve
D. Open Chrome and enter localhost:8080 in the address bar.
E. Enjoy!

---
---
