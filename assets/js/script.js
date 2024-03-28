// Add event listener to the "Play" button
document.getElementById("playBtn").addEventListener("click", function () {
  // Click on 'Play' button to get redirected to the quiz (game page)
  // (Learned how redirect to another webpage from https://www.geeksforgeeks.org/how-to-redirect-to-another-webpage-using-javascript/)
  window.location.href = "game.html";
});
// Add event listener to the "Game Rules" button
document.getElementById("rulesBtn").addEventListener("click", function () {
  // Display the modal when the button is clicked
  document.getElementById("rulesModal").style.display = "block";
});

// Add event listener to the close button of the modal
document.querySelector(".close").addEventListener("click", function () {
  // Hide the modal when the close button is clicked
  const modal = document.getElementById("rulesModal");
  modal.style.display = "none";
});

// Close the modal if the user clicks outside of the modal content
// Code adapted from https://wordpress.org/support/topic/how-to-close-a-popup-when-clicking-outside-of-it/
window.addEventListener("click", function (event) {
  const modal = document.getElementById("rulesModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
// Add event listener to the "Scoreboard" button
document.getElementById("scoreboardBtn").addEventListener("click", function () {
  // Clear existing content inside the outer container
  const outerContainer = document.querySelector(".outer-container");
  outerContainer.innerHTML = "";

  // Retrieve high scores from local storage
  let currentHighScores = localStorage.getItem("foodQuiz");

  // Check if there are high scores stored
  if (currentHighScores) {
    currentHighScores = JSON.parse(currentHighScores);

    // Sort high scores by score value 
    currentHighScores.sort((a, b) => b.score - a.score);

    // Limit the high scores to the top 10 entries
    currentHighScores = currentHighScores.slice(0, 10);

    // Generate HTML to display high scores
    const highScoreHTML = currentHighScores
      .map((scoreObj, index) => {
        return `<p>${index + 1}. ${scoreObj.name}: ${scoreObj.score}</p>`;
      })
      .join("");

    // Display high scores in the scoreboard container
    outerContainer.innerHTML = `${highScoreHTML}`;

    // Update the text content of the oval circle heading
    const ovalCircleHeading = document.querySelector(".oval-circle h1");
    ovalCircleHeading.textContent = "High Scores";

    // Remove the text content of the oval circle subheading
    const ovalCircleSubheading = document.querySelector(".oval-circle h2");
    ovalCircleSubheading.textContent = "";
  } else {
    // If no high scores found, display a message
    outerContainer.innerHTML = "<h2>No high scores yet!</h2>";
  }
});
