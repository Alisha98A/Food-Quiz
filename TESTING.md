# The Food Quiz -  Testing

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [JavaScript Validator](#javascript-validator)
  * [Lighthouse](#lighthouse)
* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)


## AUTOMATED TESTING

### W3C Validator

- - -

### JavaScript Validator

- - -

### Lighthouse
 
## MANUAL TESTING

To ensure optimal responsiveness on different screen sizes and devices, I thoroughly checked each page, including the homepage, the game page and the 404 error page, using Google Chrome Developer Tools and the Firefox Inspector tool. This allowed me to identify any potential display inconsistencies.

Testing continued rigorously throughout the development phase. I relied on the Chrome Developer Tools to immediately identify and fix any issues identified. I also utilized the Google developer tools to verify the seamless functionality of the project and quickly resolved any inconsistencies that arose during the process.

I also used the console in the developer tools to closely examine sections of the JavaScript code and fix bugs. This approach allowed for thorough testing and ensured that the code worked smoothly and any issues encountered were quickly resolved.

### Testing User Stories


### Full Testing

Each device tested the site using the following browsers:

* Google Chrome
* Safari
* Firefox

Full testing was performed on the following devices:

* Big screen computer
   *  Samsung Odyssey g9 neo
* Laptop:
  * MacBook Pro (13-inch, 2017)
* Mobile Devices:
  * iPhone 12 pro
  * iPhone 12
  * iPhone 12 pro Max

The site have also been tested by friends and family. They reported no issues. 
`Home Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The Food Quiz logo | Directs the user back to the home page no matter what page you are on | Clicked on the logo | Home page reloads | Pass |
| Game rules button | Displays the modal with the instructions on how to play the game | Clicked on button | Modal with instructions on how to play opens | Pass |
| Modal close button | Closes the modal | Clicked on close button (alternative 2: clicked on whatever outside the box) | Modal closed for both alternatives | Pass |
| Play Button | Redirects the user to the game page | button clicked | game page opens and displays the difficulty selection| Pass |
| Scoreboard Button | Replaces current content with High Scores content | Clicked on button | High Scores content shows up | Pass |
| All buttons - hover effect | All orange buttons with black text should change to a darker orange when you move the mouse pointer over them. | When you hover over the individual buttons on the page, each button will display the correct styling | Pass |


`Game page`
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Random questions | Random questions comes up when refreshing the page | Refreshed the page many times to ensure it's working | Random question feature works | Pass |
| Maximum of 10 questions per quiz | Out of all the questions stored, there should only be 10 questions per quiz| Run the quiz and count the questions| Counted to 10 every time | Pass |
| Hovering over effect on answers | The answer button should change color to show which answer button is hovered over| Hovered over answer | Answer button changes color | Pass |
| Red/green colors for incorrect/correct answers | Red color for incorrect answer and green color for correct answer, should be displayed after answering | Clicked on incorrect answer, answer buttons turns red (and the correct one turns green at the same time). Clicked on correct answer, answer button turns green | Green/red color shows for correct/incorrect answers | Pass |
| Next question when clicked on answer options | When user clicks on answer button (no matter if it's correct or incorrect), the answers should be revealed and next question should pop up | Clicked on correct respective incorrect answer to see what happens | Next question shows up shortly after| Pass |
| Timer countdown reset| Timer should countdown from 15 seconds, after that time. If nothing is clicked on, next question pops up and timer resets, beginning from 15 seconds  | Waited 15 seconds | Next question shows up | Pass |
| Timer effects | When less than 5 seconds left, the numbers should turn red and bold| Waited until 5 seconds left | Numbers turn red and bold | Pass |
| Timer effects continue| When less than 3 seconds left, numbers should be shaking | Waited until 3 seconds left | Numbers are shaking | Pass |
| Score value| Add +10 points to score value for each correct answer| Answered correct | Added 10 points to the score value | Pass |
| End game score | Show the final score | Run through the quiz | Final score is showing | Pass |
| Name input | Able to type in name | Type in name | Name typed in | Pass |
| Name input prevent | Prevent from typing in more than 20 characters | Typed in more than 20 characters | A popup is displaying saying that no characters more than 20 can be submitted | Pass |
| Local storage score | Save score for local storage when clicking on submit | Typed in name, clicked submit. Opened Devtools & Application to see if name+score is stored in local storage | Name+score is showing in local storage | Pass |

`404 error page`
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Navigation bar  | Navigation bar works correctly with the links | Test the logo and the game link | Got redirected to their respective sites | Pass |
| Text and button | Text and button is showing correctly | Refresh the page | Text and button is showing | Pass |
| Homepage button| When clicking on homepage button, you get redirected to the homepage | Click on button| Get redirected to homepage| Pass |
