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
    {
      question: "Which chocolate bar is the global bestseller?",
      options: ["Snickers", "Mars", "Bounty", "Twix"],
      answer: 0,
    },
    {
      question: "How many tablespoons are in a cup?",
      options: ["13", "14", "15", "16"],
      answer: 3,
    },
    {
      question: "Which animal can be found on the Toblerone logo?",
      options: ["Lion", "Tiger", "Cat", "Bear"],
      answer: 3,
    },
    {
      question:
        "Pizza Margherita is a typical Neapolitan pizza made with tomatoes, mozzarella cheese, salt, extra-virgin olive oil, and what culinary herb?",
      options: ["Oregano", "Basil", "Mint", "Pepper"],
      answer: 1,
    },
    {
      question: "Question: What is the primary ingredient in guacamole?",
      options: ["Avocado", "Tomato", "Onion", "Lemon juice"],
      answer: 0,
    },
    {
      question: " Which spice gives the Indian dish curry its yellow color?",
      options: ["Cumin", "Turmeric", "Paprika", "Saffron"],
      answer: 1,
    },
    {
      question: " Which spice gives the Indian dish curry its yellow color?",
      options: ["Kidney beans", "Black beans", "Lentils", "Chickpeas"],
      answer: 3,
    },
  ];

  // Constants
  const correctBonus = 10;
  const maxQuestions = 10;
  const questionTime = 15;

  // Start the game
  startGame();

  // Function to start the game
  function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = []; // Reset available questions array

    // Select 10 random questions
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      const randomQuestion = questions[randomIndex];
      availableQuestions.push(randomQuestion);
      // Remove the selected question from the questions array to prevent duplicates
      questions.splice(randomIndex, 1);
    }

    getNewQuestion();
  }

  // Function to start the timer with visual effects
  function startTimer() {
    clearInterval(timerInterval); // Clear existing timer interval

    let timeLeft = questionTime;

    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;

      // Add visual effects when timer is about to end
      if (timeLeft <= 5) {
        timerDisplay.style.color = "#ff0000"; // Change color to red
        timerDisplay.style.fontWeight = "bold"; // Make the text bold
      } else {
        timerDisplay.style.color = ""; // Reset color
        timerDisplay.style.fontWeight = ""; // Reset font weight
      }

      // Flashing effect when timer is about to end
      if (timeLeft <= 3) {
        if (timerDisplay.style.visibility === "hidden") {
          timerDisplay.style.visibility = "visible";
        } else {
          timerDisplay.style.visibility = "hidden";
        }
      } else {
        timerDisplay.style.visibility = "visible";
      }

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
      selectedOption.style.backgroundColor = "#ff6464"; // Display red for incorrect
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
    // Code adapted from: https://javascript.plainenglish.io/check-if-string-is-alphanumeric-in-javascript-e325caa3ee
    const nameInput = e.target[0];
    let name = nameInput.value.trim(); // Trim whitespace from the input
    const maxLength = 20; // Maximum allowed length for the name

    // Check if the name is empty or exceeds the maximum length
    if (name === "" || name.length > maxLength) {
      alert(`Please enter a name with maximum ${maxLength} characters.`);
      return;
    }

    // Regular expression to match only letters and numbers
    const regex = /^[a-zA-Z0-9]+$/;

    // Check if the name contains only letters and numbers
    if (!regex.test(name)) {
      alert("Name can only contain letters and numbers.");
      return;
    }

    let currentHighScores = localStorage.getItem("foodQuiz");
    let newObject = { name: name, score: score };

    // Check if localStorage is empty/null
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
