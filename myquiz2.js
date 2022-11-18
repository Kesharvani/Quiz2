let object = [
  {
    question: "Who is also know as God of cricket?",
    answer: "Sachin Tendulkar",
  },
  {
    question: "Who has most hundred in his career in all formate?",
    answer: "Sachin Tendulkar",
  },
  {
    question: "which cricket has most number of ICC trofies?",
    answer: "Australia",
  },
  {
    question: "which team won the T20 world cup in 2022?",
    answer: "England",
  },
  {
    question: "Who is also known as capatain cool in indian cricket team?",
    answer: "Mahendra Singh Dhoni",
  },
  {
    question: "In which year Indian team won the T20 world cup?",
    answer: "2007",
  },
];

var score = 0;

var temp = require("readline-sync");

while (true) {
  var userName = temp.question("Please enter your name:");
  if (!userName) {
    console.log(
      "Without entering your name you can't process for the quiz. Please Enter your name:"
    );
    continue;
  }
  console.log("Welcome", userName);
  break;
}
console.log("This Quiz is about world cricket. Let play it!!!!!");

for (i = 0; i < object.length; i++) {
  console.log();
  var input = temp.question(object[i].question);
  console.log("score:" + quiz(object[i].answer, input));
}
console.log("Final score:" + score);

function quiz(answer, useranswer) {
  if (answer === useranswer) {
    return ++score;
  } else {
    return "Your answer is wrong";
  }
}
