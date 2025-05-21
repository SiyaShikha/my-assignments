const questions = [
  ["What is the capital of France?", ["Berlin", "Rome", "Paris"], 2],
  ["What is the capital of Germay?", ["Berlin", "Rome", "Paris"], 0],
];

const shuffle = function(questions) {
  return questions.toReversed();
}

const tally = function(quiz,answers) {
  const questionsWithAnswers = quiz.map(function(question,index){
    return [question,answers[index]];
  });
  const incorrect = questionsWithAnswers.filter(function([[q,_,actualAnswer],answer]) {
    // console.log([[q,_,actualAnswer],answer]);
    return answer !== actualAnswer;
  })
  for(const [[q,_,actualAnswer],a] of incorrect) {
    console.log(q,a,actualAnswer);
  }
}

const runQuiz = function() {
  const quiz = shuffle(questions);
  const answers = [];
  for(const [question,choices] of quiz) {
    console.log(question);
    console.log(choices.map(function(choice,i) { return (i+1) + " " + choice}).join("\n"));
    const answer = +prompt("Enter your choice");
    answers.push(answer-1);
  }
  tally(quiz,answers);
}

runQuiz();