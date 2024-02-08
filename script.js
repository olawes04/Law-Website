function loaded() {
    console.log("The page has now loaded");
}
function showRight(){
    document.getElementById("feedback-area").innerHTML= "Correct";
}
function showWrong(){
    document.getElementById("feedback-area").innerHTML= "You bufoon";
}
<script>
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const quizForm = document.getElementById("quiz-form");
  const submitButton = document.getElementById("submit-button");
  const resultContainer = document.getElementById("result");

  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionContainer.textContent = currentQuestionData.question;

    optionsContainer.innerHTML = "";
    currentQuestionData.options.forEach((option, index) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const radio = document.createElement("input");

      radio.type = "radio";
      radio.name = "answer";
      radio.value = option;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));

      li.appendChild(label);
      optionsContainer.appendChild(li);
    });
  }

  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
      return selectedAnswer.value === questions[currentQuestion].correctAnswer;
    }

    return false;
  }

  function updateScore() {
    score += 1;
  }

  function showResult() {
    resultContainer.textContent = `You scored ${score} out of ${questions.length} questions.`;
  }

  function nextQuestion() {
    if (checkAnswer()) {
      updateScore();
    }

    currentQuestion += 1;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  loadQuestion();

  submitButton.addEventListener("click", nextQuestion);
</script>
