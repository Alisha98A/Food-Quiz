document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const questionElement = document.getElementById("question");
  const options = Array.from(document.querySelectorAll(".answer-text"));
  const scoreValue = document.getElementById("score-value");
  const timerDisplay = document.getElementById("timer");
  const playAgainBtn = document.getElementById("play-again-btn");

  // Game variables
  let currentQuestion = {};
  let score = 0;
  let questionCounter = 0;
  let availableQuestions = [];
  let timerInterval;

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
  const correctBonus = 10;
  const maxQuestions = 30;
  const questionTime = 15;

  // Start the game
  startGame();

  // Function to start the game
  function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
  }

  // Function to start the timer
  function startTimer() {
    clearInterval(timerInterval); // Clear existing timer interval

    let timeLeft = questionTime;

    timerDisplay.textContent = timeLeft;

    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;

      if (timeLeft === 0) {
        clearInterval(timerInterval);
        handleTimeout();
      }
    }, 1000);
  }

  // Function to get a new question
  function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
      // Call endGame function when the quiz ends
      endGame();
      return;
    }

    startTimer(); // Start the timer for each new question

    // Reset background colors of answer buttons
    options.forEach((option) => {
      option.style.backgroundColor = "";
    });

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;

    // Display options
    options.forEach((option, index) => {
      option.style.display = "block"; // Show options
      option.innerText = currentQuestion.options[index];
      option.addEventListener("click", handleAnswerClick);
    });

    // Remove the selected question from the available questions array
    availableQuestions.splice(questionIndex, 1);
  }

  // Function to handle answer click
  function handleAnswerClick(e) {
    const selectedOption = e.target;

    // Get the text content of the selected option
    const selectedAnswer = selectedOption.textContent;

    // Check if the answer is correct
    const correct =
      selectedAnswer === currentQuestion.options[currentQuestion.answer];

    // Update and display the score
    if (correct) {
      score += correctBonus;
      selectedOption.style.backgroundColor = "#a2c11c"; // Display green for correct
    } else {
      selectedOption.style.backgroundColor = "#fa360a"; // Display red for incorrect
      // Find and color the correct answer green
      options.find(
        (option) =>
          option.textContent === currentQuestion.options[currentQuestion.answer]
      ).style.backgroundColor = "#a2c11c";
    }
    // Update score display
    scoreValue.textContent = score;

    // Disable further clicking on options
    options.forEach((option) => {
      option.removeEventListener("click", handleAnswerClick);
    });

    // Delay before showing next question
    // Source link: https://www.sitepoint.com/delay-sleep-pause-wait/
    setTimeout(getNewQuestion, 1800);
  }

  // Function to handle timeout
  function handleTimeout() {
    questionElement.innerText = "Time's up! Next question...";
    setTimeout(getNewQuestion, 2000);
  }

  // Function to handle end game
  function endGame() {
    // Hide timer
    timerDisplay.style.display = "none";

    // Hide game elements
    document.getElementById("game").style.display = "none";
    document.getElementById("score").style.display = "none";

    // Show end page
    const endPage = document.getElementById("end-page");
    endPage.style.display = "block";
    document.getElementById("end-score").textContent = score;

    // Show the "Play again" button
    playAgainBtn.style.display = "block";

    // Handle form
    const form = document.getElementById("save-score-form");
    form.addEventListener("submit", handleScoreForm);
  }
  // Function to handle form submission and store score
  function handleScoreForm(e) {
    e.preventDefault();
    console.log(e);
    let name = e.target[0].value;
    let currentHighScores = localStorage.getItem("foodQuiz");
    let newObject = { name: name, score: score };
    //   // Check if localStorage is empty/null
    if (currentHighScores == null) {
      // If empty, store newObject as an array in localStorage
      localStorage.setItem("foodQuiz", JSON.stringify([newObject]));
    } else {
      // If not empty, parse the existing scores and add the new score
      currentHighScores = JSON.parse(currentHighScores);
      currentHighScores.push(newObject);
      localStorage.setItem("foodQuiz", JSON.stringify(currentHighScores));
    }
  }
});
