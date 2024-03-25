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
