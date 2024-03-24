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
    {
      question:
        "Which was the first fast-food restaurant to open an outlet in China?",
      options: ["Jollibee", "Subway", "KFC", "Mc Donald's"],
      answer: 2,
    },
    {
      question:
        "Among the numerous pizza toppings, which is the most commonly used?",
      options: ["Extra cheese", "Mushrooms", "Pepperoni", "Pineapple"],
      answer: 2,
    },
    {
      question:
        "What is the national dish of Thailand that contains rice noodles, tofu, dried shrimp, sprouts, and eggs?",
      options: ["Ramen", "Pho", "Pad Thai", "Mi Goreng"],
      answer: 2,
    },
    {
      question:
        "In which country would you find shish kebab as an everyday food?",
      options: ["Greek", "India", "Turkey", "Chile"],
      answer: 2,
    },
  ];

  // Constants
  const CORRECT_BONUS = 10;
  const MAX_QUESTIONS = 30;

  // Start the game
  startGame();

  // Function to start the game
  function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
  }

  // Function to get a new question
  function getNewQuestion() {
    // Reset background colors of options and reattach event listeners
    options.forEach((option) => {
      option.style.backgroundColor = "";
      option.addEventListener("click", handleAnswerClick);
    });

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      // Display score with final words
      questionElement.innerText = "Congratulations, your score is " + score;
      // Clear options
      options.forEach((option) => {
        option.style.display = "none";
      });
      return; // Stop further execution
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;

    // Display options
    options.forEach((option, index) => {
      option.style.display = "block"; // Show options
      option.innerText = currentQuestion.options[index];
    });

    // Remove the selected question from the available questions array
    availableQuestions.splice(questionIndex, 1);
  }

  // Function to handle answer click
  function handleAnswerClick(e) {
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset.index;

    // Check if the answer is correct
    const correct = selectedAnswer == currentQuestion.answer.toString();

    // Update and display the score
    if (correct) {
      score += CORRECT_BONUS;
    }
    scoreValue.textContent = score;

    // Add background color for showing correct/incorrect answer
    if (correct) {
      selectedOption.style.backgroundColor = "##a2c11c"; // Displays green for correct
    } else {
      selectedOption.style.backgroundColor = "#fa360a"; //Display red for incorrect
      // Find and color the correct answer green
      options[currentQuestion.answer].style.backgroundColor = "#a2c11c";
    }

    // Disable further clicking on options
    options.forEach((option) => {
      option.removeEventListener("click", handleAnswerClick);
    });

    // Get a new question or display final score
    setTimeout(getNewQuestion, 1000); // Delay before showing next question
  }

  // Call getNewQuestion initially to start the quiz
  getNewQuestion();
});
