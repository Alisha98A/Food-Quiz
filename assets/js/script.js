// GAME PAGE
document.getElementById("playBtn").addEventListener("click", function () {
  // Hide the oval circle when Play button is clicked on
  document.getElementById("ovalCircleContainer").style.display = "none";

  // Change the content in the outer container
  // The actual quiz takes place
  document.querySelector(".outer-container").innerHTML = `
        <div class="question">What country is famous for its sushi?</div>
        <div class="options">
            <input type="radio" id="option1" name="quiz" value="A">
            <label for="option1">Italy</label><br>
            <input type="radio" id="option2" name="quiz" value="B">
            <label for="option2">Japan</label><br>
            <input type="radio" id="option3" name="quiz" value="C">
            <label for="option3">Mexico</label><br>
            <input type="radio" id="option4" name="quiz" value="D">
            <label for="option4">France</label>
        </div>
        <button id="submitBtn">Submit</button>
    `;
});
