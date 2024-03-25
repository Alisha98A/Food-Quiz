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
