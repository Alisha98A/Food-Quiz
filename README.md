# [Food Quiz](https://alisha98a.github.io/Food-Quiz/): A Deliciously Interactive Experience

Welcome to the Food Quiz project! With this interactive and entertaining quiz you can test your knowledge of different cuisines, ingredients and culinary traditions from around the world. Whether you're a seasoned foodie or just someone who likes to explore different flavors, this quiz will tantalize your taste buds and challenge your culinary knowledge.


![Responsice Mockup](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/responsive_mockup.png)
Visit the deployed site: [Food Quiz](https://alisha98a.github.io/Food-Quiz/)

This project was created with HTML5, CSS3 and JavaScript for the " Diploma in Web Application Development" course at Code Institute.

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [Features](#features)
    * [The Home Page](#the-home-page)
    * [The Game Page](#the-quiz-page)
    * [Scoreboard](#scoreboard)
    * [The 404 Error Page](#the-404-error-page)
    * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)
* [Testing](#testing)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)
*  [Contributions](#contributions)
* [Credits](#credits)
  * [General reference](#general-reference)
  * [Content](#content)
  * [Media](#media)

- - -

## User Experience (UX)

### User Stories

#### First Time Visitor Goals
* **User story 1: As someone new to the site**

* I'm eager to engage in an engaging online food quiz to broaden my culinary knowledge. I seek the convenience of being able to participate from anywhere, at any time.
* Clear and concise instructions on how to play the game are essential to me.
* I expect the website to adapt seamlessly to my device.
* Navigating through the website should be intuitive and straightforward.

#### Returning Visitor Goals
* **User story 2: As a returning visitor**

* I would like to have the option of choosing a difficulty level that matches my experience, which I will assess when I first interact with the website.

#### Frequent Visitor Goals
* **User story 3: Being a regular user of the platform**

* I'm enthusiastic about sharing my feedback on the gaming experience through a straightforward and user-friendly form. I anticipate that my suggestions and reported issues will be considered for future updates, enhancing the quality of the quiz game.
* Tracking my scores over time is important to me, allowing me to monitor my performance and progress.
* I desire the ability to effortlessly share my results on various social media platforms, adding to the enjoyment of the experience.

## Design

### Colour Scheme

I have used an image to cover the whole site, as a background. The background image displays food in a clean way and has many colours in it. The colours displayed on the website are vibrant and eye-catching while ensuring a seamless experience for the user.



### Typography
  - There are three fonts used throughout the page:
 1. example
 2. example
 3. example

### Imagery

As the quiz is about food, I have added a picture of neatly arranged food to the background of the page so that the user knows what the quiz is about. 

### Wireframes

Wireframes were created for mobile, tablet and desktop using [Figma](https://www.figma.com/)

![Homepage](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/wireframe_homepage.png?raw=true)


![Game rules](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/wireframe_game_rules.png?raw=true)


![Quiz](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/wireframe_quiz.png?raw=true)

## Features
### Existing Features

- **Engaging interface:** The quiz has a user-friendly interface that provides a seamless and enjoyable experience for players of all ages.
- **Interactive Gameplay:**  Immerse yourself in a series of thought-provoking questions that will whet your appetite for culinary knowledge. Each question is carefully crafted to keep you engaged and entertained.
- **Diverse categories:**  Explore a wide range of culinary topics, including regional cuisines, exotic ingredients, famous dishes and culinary trivia.
- **Easy to play:** Whether you're a beginner or a seasoned food lover, the quiz is easy to play, with straightforward instructions and intuitive controls.
- **Instant feedback:** You get instant feedback after each question to track your progress and learn interesting facts about the world of food.
- **Score tracking:** Keep track of your score as you progress through the quiz. Challenge yourself to get a perfect score or compete with friends to see who knows the most about food.
- **Vibrant visuals:** Immerse yourself in the colorful world of food with captivating visuals that will leave you wanting more.
- **Responsive design:** Whether you're playing on a desktop computer, tablet or smartphone, the quiz is optimized for all screen sizes, ensuring a consistent and enjoyable experience across all devices.

- - -

#### THE HOME PAGE

- **Navigation Bar**
  - Featured on homepage, gamepage and 404 error page. The navigation bar is responsive & include links to Logo to the left, and Game to the right (on bigger screens), or logo stacked on top of menu (on smaller screens). When clicking on logo, you get redirected to the homepage. No matter which page you're on. Same goes for the Game link, but instead, it takes you directly to the Quiz. 
  - Navigation bar is identical on all pages for easy navigation, meaning, you can navigate from whatever page you're currently at. Without having to go through the "back" button.
  - When hovering over the object, it gets slightly bigger to show that it's a clickable link.
 
![Navigation Bar](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/navigation_bar.png)

- **Welcome content**
  - After the navigation bar, the oval circle is displayed right below as the first content.
  - Purpose of this feature is to capture the user's attention.
  - The text "Welcome to the Food Quiz! Test your general knowledge in food" describes very well what the site is about. It introduces the user to the website in an exciting way since it makes a great header!
  - The oval circle is surrounded by a black shadow to make it look better.
  - Background color is set to green for a more playful experience.
  

![Oval Circle](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/oval_circle.png)

- **Actual content**
  - Below the oval circle, comes a rectangle with the actual content.
  - Background color is set to green here as well to maintain the structure.
  - The text is kept short for simplicity, with an introcution for the user to get tempted to play, and quick directions to get started.
  - There are 3 orange buttons at the end of the content, stacked vertically for smaller screen sizes and horizontally for bigger screen sizes.
  -The buttons is informative, the Play button takes you to the game page when clicking on it, and when clicking on Game Rules button, a modal will show up with the Game Rules content. When clicking on the Scoreboard button, the content inside the rectange will change and show high scores.
- The buttons are light orange, when hovering over, the pointer symbol shows up and they change color to become sligthly darker. This is to strengthen the message that these buttons are clickable. 
![Outer container](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/outer_container.png)

- **Game Rules Modal**
  - For the modal to be displayed, you simply click on Game Rules button on the homepage.
  - The modal simply shows the game rules for the game. With a simple header and text.
  - Background color is set to orange (same as the buttons) to show it's a modal.
  - To leave this modal, you simply click on the 'x' symbol on the top right or outside the orange box. 
    
![Game Rules Modal](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/modal.png)



#### THE QUIZ PAGE

- **Quiz**
  - On the game page, the quiz is in the same green rectangle as the content on the homepage. Only difference is that we removed earlier content and put in a quiz instead.
  - In the navigation bar, the 'Game' text is replaced by 'Click to restart' to make it clear for the user that if that link is clicked, it's going to restart the game. 
  - The quiz contains 4 multi-choices for 1 question each. The question is displayed on top, followed by the answers, displayed like a column.
  - The answer buttons have a hovering effect, when hovering over, the button gets lighter.
  - When clicking on the correct answer, the answer button gets green to show that it's correct.
  - When clicking on the incorrect answer, the button clicked on gets red to show it's incorrect. In addition, the correct answer is displayed in green at the same time, to reveal what the correct answer was.
  - Straight below the multi-answers is an orange button link saying "Back to homepage". If the user clicks on that button, he/she gets redirected back to homepage. The button have same features as the buttons on the home page (hovering over effect), to make it simple and easy to recognize.


![Quizl](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/quiz.png)

  - On the left side of the quiz, there is a Timer feature, showing the time left for the question with a countdown from 15 seconds. When the timer goes down to 5, the numbers turn red and bold, and when its 3 seconds left, the numbers are 'shaking', with the purpose to get the users attention and to cause stress, since it's a game. When time is up, the question showed will be replaced by the text 'Time's up! Next question...'. And a new question will pop up quickly after, restoring the timer countdown for the next question. And so it goes on..
- Below the timer, there is a text of 'Score' with value displayed. At the beginning, it shows 'Score: 0'. But for every correct answer, the value immediately changes to +10. The value is in a different color to show the user that it's counting.

![Times upl](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/times_up.png)


- **Endgame**
  - When the quiz ends, a white/grey box shows up displaying 'Congratulations, you scored x', to quickly show the user how many points they made.
  - User also get the opportunity to save the scores, by filling in their name and clicking on the Submit button. The high scores will be saved locally.
  - There are 2 buttons, same feature and style as the ones at the homepage (for simplicity and recognition). The first button says 'Play again?' and the other says 'Back to homepage'. Making it easy for the user to navigate to the desired destination.
  
![Endpage scoresl](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/scores_endpage.png)

  - This feature prevents the user from typing in things that are not allowed, for example: when typing in numbers, there is a popup saying that numbers are not allowed. 
![Only letters input](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/only_letters_input.png)

  - There is also a maximum of 20 characters, when user types in beyond that, it will prevent you from submitting. 
![Maximum wordsl](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/maximum_words_submit_form.png)

#### SCOREBOARD
  - The scoreboard is accessible through the homepage 'Scoreboard' link.
  - The earlier content is removed and replaced with 'High Scores' displayed in the oval circle. And the scores is displayed in the rectangle.
  - 'No high scores yet' will be showed if nothing is saved to the local storage. Otherwise, the last 10 high scores will show up. The reason it's only 10 is because more than that will make the scoreboard messy. The highest score will show at the top.
  
![Scoreboardl](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/scoreboard.png)

#### THE 404 ERROR PAGE
  - The 404 error page is there in case user gets lost or some link is broken. 
  - It contains navigation bar, for the user to easily navigate back to the game or the homepage.
  - It also have a big text to get the user's attention, with a button link that goes back to the homepage (this button is more visible than the one in the navigation bar).
   
![404 pagel](https://github.com/Alisha98A/Food-Quiz/blob/main/documentation/404.png)


#### Future Implementations

In future implementations I would like to: 
  - Create difficulty levels, 'Easy' for a quiz of 15 questions, 'Medium' for a quiz of 30 questions and 'Hard' for a quiz of 45 questions.
  - Add features to the scoring, for example, if answer is incorrect or time runs out, you get minus points. Also, the faster you answer the higher score you get. For example if you answer on less than 5 seconds, you get double points etc. This features will add to the experience of the game and make it more fun and addictive to play.
  - Create a modal for the 'Click to restart' link in the navigation bar at the game page, where the user has to click on the modal and click on the link inside if they really want to restart the game. This is to increase the user experience, where the user has the option to choose before leaving the current game.  

### Accessibility

During programming, I made sure that the website is as barrier-free as possible. I have achieved this by:

* Using semantic HTML.
* Using a hover state for all buttons on the website to make it clear to the user whether they are hovering over a button.
* Choose a sans serif font for the website - these fonts are suitable for people with dyslexia.
* Ensure sufficient colour contrast throughout the website.
- - -

## Technologies Used

### Languages Used

HTML, CSS, Javascript

### Frameworks, Libraries & Programs Used

* [Figma](https://www.figma.com/) - Used to create wireframes.

* [Git](https://git-scm.com/) - For version control.

* [Github](https://github.com/) - To save and store the files for the website.

* [GitPod](https://gitpod.io/) - To clone and show for tutoring assistance
  
* [VS Code](https://code.visualstudio.com/) - IDE used to create the site

* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

* [jQuery](https://jquery.com/) - A JavaScript library.

* [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [TinyPNG](https://tinypng.com/) To compress images

* [Pixelied](https://pixelied.com/convert/jpg-converter/jpg-to-webp) To convert images to webp format.

* [Favicon.io](https://favicon.io/) To create favicon.

* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

* [Open Trivia DataBase](https://opentdb.com/) - API used for the trivia questions.

* [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) - A Google Chrome extension that allows you to view JSON either as raw data or parsed.
 
* [Web Disability Simulator](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) - A Google Chrome extension enabling you to view your site from the perspective of individuals with accessibility needs.

* [Webpage Spell-Check](https://chrome.google.com/webstore/detail/webpage-spell-check/mgdhaoimpabdhmacaclbbjddhngchjik/related) - A Google Chrome extension for spell-checking your webpage, designed to identify spelling errors in both your site and README.

- - -

## Deployment & Local Development

### Deployment

The website is deployed via GitHub Pages - [Food Quiz](www.link.com).

How to deploy the website with GitHub Pages:

1. Log in (or register) to Github.
2. Go to the repository for this project, [Alisha98A/Food-Quiz](www.link.com).
3. Click on the Settings button.
4. Select Pages from the left navigation menu.
5. Select the main branch from the Source drop-down list and click Save.
6. Please note that this process may take a few minutes before the website goes live.
### Local Development

#### How to Fork

To fork the repository:

1. Log in to Github (or sign up).
2. Go to the repository for this project, [Alisha98A/Food-Quiz](www.link.com)
3. Click on the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in to GitHub (or sign up).
2. Go to the repository for this project, [Alisha98A/Food-Quiz](www.link.com)
3. Click the Code button, choose whether you want to clone using HTTPS, SSH or GitHub CLI and copy the link that appears.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press the Enter key.

- - -

## Testing

Please refer to the file [TESTING.md](TESTING.md) for all tests performed.

### Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | Flashing occurs when refreshing the page (once in a while) | Tried to prevent it by using JavaScript and the 'onload' event of the image to trigger actions once the image is fully loaded. However, with help from John on tutoring team. We agreed on changing fallback color to be more white/grey would be the easiest option, as the flashing won't be so obvious. |
| 2 | Answer buttons (for the quiz) don't function correctly | Forgot to add closing div for game, after adding it. Everything worked fine|
| 3 | Score not counting | To solve this issue, I corrected the option attribute to match the index of the correct answer (It was previously set to 1,2,3,4 in HTML. Now it's changed starting from 0, which matches the index of the answers in Javascript). I also added '===' instead of '==' to ensure strics equality |
| 4 | Red/green colors don't display correctly for correct/incorrect answers | To ensure correctness, I compared the text content of the selected option (selectedAnswer) with the text content of the correct answer (currentQuestion.options[currentQuestion.answer]). I used the find method to search for the correct answer by comparing the text content of each option with the text content of the correct answer. After making these changes, the function now handles both correct and incorrect responses|
| 5 | After quiz completion, user is asked to submit name to log score. Problem with storing data of name submitted | Solved it by storing an if statement checking if local storage is empty versus not empty, using JSON string to parse into javascript array. |
| 6 | Clicking on submit button but instead of showing name and score, I get redirected back to the quiz | Run the console.log in Devtools and saw an error of a variable that I'm trying to access the 'style' property of is null. Added an ID of that variable back in HTML, after checking the console log again and testing the submit button. I now see the name and the score displaying. |

### Known Bugs

* Flashing occurs when refreshing the page (once in a while, not every time). Since it's not affecting the overall user experience, I decided to just change the fallback color to be more white/grey (was previous orange, which was not so smooth). 

  ![photo](photo)

- - -

  ## Contributions:
We welcome contributions from fellow food enthusiasts and developers who share our passion for creating engaging and educational experiences. Whether you have ideas for new quiz questions, suggestions for improving the user interface, or code improvements to optimize performance, I would love to hear from you. Fork the repository, make your changes and submit a pull request  – together we can make the Food Quiz project even more delicious!

- - -
## Credits

### General reference
- This project was inspired by my love of food and my desire to share this passion with others. I wholeheartedly thank the contributors and sources of inspiration who helped me bring this project to life.
-  This project was influenced by Love Math, a code-along project from Code Institute. By trying to understand the underlying principles I have tried to adapt them to my own project. However, this might involve using similar container elements, semantic tags etc.
- I relied very much upon Code Institute's learning material, together with MDN and W3Schools.
- Code Institute Slack Community has been a big support for clarifications on things or helping me solve bugs. 
- Got help with README.md structure from [Kera's README file](https://github.com/kera-cudmore/readme-examples/edit/main/README.md)



### Content
  - Learned how to use the var() function in CSS [W3Schools](https://www.w3schools.com/css/css3_variables.asp) for better structure
  - John from Tutoring Team helped me with my flashing bug (when refreshing the page, sometimes color loaded before image)
  - Learned how to redirect to another webpage using JavaScript from [Geeksforgeeks](https://www.geeksforgeeks.org/how-to-redirect-to-another-webpage-using-javascript/)
  - Learned more about DOM and eventlistener from [W3Schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) and [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  - Inspiration for how to make a quiz [Brian Design's Youtube video](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
  - Learned how to use delays in JavaScript from [Sitepoint](https://www.sitepoint.com/delay-sleep-pause-wait/)
  - Learned how to fix answer comparison for checking the correct/incorrect answer. With help from communty from Slack. 
  - [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) on how to use modals.
  - Learned how to close modal if the user clicks outside of its content. [Wordpress](https://wordpress.org/support/topic/how-to-close-a-popup-when-clicking-outside-of-it/)
  - Adapted opacity from [Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) (stling in CSS)
  - Function to handle form submission and store score, solved it with help from Matt, my mentor.
  - [James Q Quick Youtube video](https://www.youtube.com/watch?v=_LYxkClHnV0&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=5) on how to display feedback for correct/incorrect answers
  - [James Q Quick Youtube video](https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9) on how to save high scores in local storage
  - [James Q Quick Youtube video](https://www.youtube.com/watch?v=jfOv18lCMmw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=10) on how to load and display high scores from local storage
  - Took some of the questions for my quiz from [Buzzfeed](https://www.buzzfeed.com/laurafrustaci/50-food-trivia-questions-to-get-your-mouth-watering-and) and [Ricotta](https://www.ricotta.team/blog/food-trivia) and also asked [Open AI](https://chat.openai.com/) for question ideas

### Media
  -  Learned how to make a image background responsive from [Cem Eygi Media's Youtube video](https://www.youtube.com/watch?v=vimZLEd702Y)
