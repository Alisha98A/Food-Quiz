document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const questionElement = document.getElementById("question");
  const options = Array.from(document.querySelectorAll(".answer-text"));
  const nextButton = document.getElementById("nextBtn");
  const scoreValue = document.getElementById("score-value");

  // Game variables
  let currentQuestion = {};
  let score = 0;
  let questionCounter = 0;
  let availableQuestions = [];

  // Quiz questions
  const questions = [
    {
      question: "What is the most consumed fruit in the world?",
      options: ["Bananas", "Apples", "Oranges", "Citrus"],
      answer: 0,
    },
    {
      question:
        "Which fruit is known as Southeast Asia's king of fruits due to its strong smell and flavor?",
      options: ["Dragon Fruit", "Mangoes", "Durian", "Lychee"],
      answer: 2,
    },
    {
      question: "Which country did the french fries originate from?",
      options: ["France", "USA", "UK", "Belgium"],
      answer: 3,
    },
    {
      question: "Which food contains the most calories per gram?",
      options: ["Chocolate", "Chia seeds", "Avocado", "Pistachio"],
      answer: 2,
    },
  ];
  // Constants
  const CORRECT_BONUS = 10;
  const MAX_QUESTIONS = 3;
  
  // Start the game
  startGame();

  // Function to start the game
  function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
  }
});
