# Kindergarten Stars

![responsive](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/ui-dev.PNG?raw=true)

# Table of Contents

- [Kindergarten Stars](#kindergarten-stars)
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [User Goals and Stories](#user-goals-and-stories)
- [Features](#features)
  - [Existing features](#existing-features)
    - [Navigation Bar](#navigation-bar)
    - [Home Page Logo](#home-page-logo)
    - [Username Input](#username-input)
    - [Levels Page](#levels-page)
    - [Quiz Pictures](#quiz-pictures)
    - [Quiz Container](#quiz-container)
    - [Hidden Next Button](#hidden-next-button)
    - [Store username and score](#store-username-and-score)
    - [Modal](#modal)
  - [Future Features](#future-features)
    - [Multiplayer games](#multiplayer-games)
    - [Larger pool of questions](#larger-pool-of-questions)
    - [Certificate of Achievement](#certificate-of-achievement)
- [Design of Website](#design-of-website)
  - [Wireframes](#wireframes)
    - [Home Page](#home-page)
    - [Game Page - Choose a Level](#game-page---choose-a-level)
    - [Levels 1-3](#levels-1-3)
  - [Fonts](#fonts)
  - [Color Scheme](#color-scheme)
  - [Images](#images)
- [Languages](#languages)
- [Technologies used](#technologies-used)
- [Testing](#testing)
  - [Validation](#validation)
    - [HTML](#html)
    - [CSS](#css)
    - [Javascript](#javascript)
  - [Browser Compatability](#browser-compatability)
  - [Unfixed Bugs](#unfixed-bugs)
  - [Responsiveness](#responsiveness)
  - [User Stories Testing](#user-stories-testing)
  - [Manual Testing](#manual-testing)
- [Deployment](#deployment)
  - [Navigate to the GitHub Repository](#navigate-to-the-github-repository)
  - [Run Project Locally](#run-project-locally)
    - [Clone the Repository](#clone-the-repository)
    - [Download the Repository Manually](#download-the-repository-manually)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)

# Introduction

Kindergarten Stars is a fun and interactive quiz for children aged three to six years of age, who can practice and increase their knowledge of the alphabet, colors, shapes and numbers. This quiz is to provide a fun and friendly vibe for both children and their guardians and provides an inviting space that makes learning fun at home. Players can play as many times as they like while logging their highscore and practice each level to reinforce what they learn at creche/school.

# User Goals and Stories

As a first-time user I want to:

- Easily navigate through the site and go to the appropriate level for each players ability
- Be able to easily identify the purpose of the site
- View the website on both mobile and desktop devices
- Get a sense of community and welcoming
- Interact with the Elementary Stars by following learning videos on the YouTube channel

As a returning user I want to:

- Practice over and over again to gain confidence and knowledge
- Have the quiz remember my username and last score to log in quicker and easier
- View the website on both mobile and desktop devices

# Features

## Existing features

### Navigation Bar

- Featured on the game.html page to return Home, as well as the three levels pages to either return Home or go back to the game page to chose a level, the fully responsive navigation bar includes two links. It is identical on each page to allow for easy navigation.
- This will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button.
- A feature of this navbar is that it is sticky so will always stay at the top of the page when user is scrolling, this allow for better ux design so user can navigate easier and quicker without having to scroll to top.

![navbar](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/level%20nav.png?raw=true)
  
### Home Page Logo

- The landing includes the quiz name "Kindergarten Stars" with a logo picture of an open book with pop up features.
- This section introduces the user to Kindergraten Stars with fun colors and a child friendly vibe and cartoon pictures, that follows across the site.

![homepage](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/homepage.png?raw=true)
  
### Username Input

- This username form will allow the players to enter a username which will be tracked by the site and linked to their highscore, to provide a better user experience as the user can keep record of their highscore each time they play or log back in to the quiz.
- This form also uses javascript form validation to ensure the player enters a username before they can carry on with the quiz.

![form-validation](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/username%20validation.png?raw=true)
  
### Levels Page

- This page allows the user to chose a level and the levels have kid-friendly names so they can be identified by a child as to how easy or hard they are, level one being the easiest "Easy-peasy", level two "Smarty Pants" is for confident players, and finally level three is for advanced players "Quiz Master".

![levels-page](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/levelspage.png?raw=true)

- The level buttons are large and color coded to help a child chose a level easily and upon return they will be able to recognice each level by the color.
- The page also has an image of a smiling cartoon star to reflect the name of the quiz "Elementary Stars" and provides a light and fun spirit that is also easy on the eye for the user.
  
### Quiz Pictures

- The pictures are all child friendly and easily identifiable, with the logo being an open pop up book as discussed, to attract the user in to the world of Kindergarten Stars as if it were a bok to read full of surprises. The game.html picture is a star to follow on with the theme of the header/logo.
- The pictures on the levels pages are all placed at the top of the quiz container and they provide nice visuals for the user and more of an interactive experience with the quiz as the user is answering questions related to the images.

### Quiz Container

- The quiz questions and answers are contained in a large white box with orange and maroon color borders, following on with the color scheme of the site. The quiz container is large and clear so that the indended user can easily identify where their input is required and read the questions cleary and without any confusion as to what is required.

![quiz-box](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/quiz%20example.png?raw=true)
  
### Hidden Next Button

- The 'Next' button is hidden until the user selects an answer, this again helps with eliminating any confusion as to what is required from the user, they must first select an answer and then the next button will appear and they can then move on to the next question.

![hidden-next](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/next%20btn%20hidden.png?raw=true)

![visible-next](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/next%20btn%20visible.png?raw=true)
  
### Store username and score

- At the end of each quiz the username will be provided with their score and the option to play again.

![score](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/show%20score.png?raw=true)

- Usernames and scores are also stored in local storage so the user can see what their previous score was when they return to the site and their username will also be autofilled in to the username field for ease of access to the quiz, this can be deleted or amended if there is a different user from the same PC or if the user simply would like to user a different username. The welcome back message and the storage of scores encourages the user to come back to the quiz again and again to practice.

![welcome-back](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/welcome%20back.png?raw=true)
  
### Modal

- Another feature of the quiz is a pop up when the user is finished the quiz, a modal pop ups to advise the user of the Kindergarten Stars youtube page, where they can find more learning resources and fun vidoes. Also included in the modal is the star image from the game.html page, which gives a nice flow to the site by re-using this image.

![modal](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/modal.png?raw=true)
  
## Future Features

### Multiplayer games

- It would be a fabtastic option for the user to be able to log in and play with their friends from different PCs and mobile devices, so they can view eachothers usernames and scores as they play. This is a feature that could be implemented once I have better knowledge and the skill set to do so.

### Larger pool of questions

- Currently each level has 5 questions that are reiterated again and again in random order. But a future element of the quiz would be to add a lot more questions to provide a more extensive learning experience for the user.
- With the separation of concerns principle in mind I would also create two separate javascript files so that the quiz questions could be stored separately in one and functions, event listeners, etc in the other.

### Certificate of Achievement

- I would like to add a personalised certificate at the end of each quiz whereby the user can download and print if they wish, or a digital badge that can be saved and displayed in an online user area. The certificate will outline their achievement stating the level and score received, this would be an encouraging pat on the back for the user and also lead to repeat site visits. The certificate and badge could also fall in with the multiplayer level feature as friends could view an online shared user area and see what badges other users have achieved.

# Design of Website

## Wireframes

### Home Page

![pc-home](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/pc_home.png?raw=true)

![mobile-home](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/wireframe_home.png?raw=true)

### Game Page - Choose a Level

![pc-levels](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/pc_levels.png?raw=true)

![mobile-levels](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/wireframe_levels.png?raw=true)

### Levels 1-3

![pc-quiz](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/pc_quizpages.png?raw=true)

![mobile-quiz](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/wireframe_quizpages.png?raw=true)

## Fonts

The fonts for the site came from [Google Fonts](https://fonts.googleapis.com)

All the text is one font to keep the site simple and streamlined in design: Comic Neue

Comic Neue offers an informal touch to the site and the rounded edges give a playful feel to the whole site which in in keeping with the playful vibe for the targeted audience. I created the heading/logo text myself from the Comic Neue font and CSS styling with border shadows, the bubble effect of the text gives a youthful feel to the site along with the bright colors of the white and orange.

![heading](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/heading-logo.png?raw=true)

## Color Scheme

The color scheme is based around the main home page image of the open pop-up book. I pulled the colors for the background of the site and the border colors from this image.

![home-image](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/color-picker.png?raw=true)

The background color used is a light blue with hex code #76e5ff, this give a fresh feel to the site and is an inviting pop of color. The other two main colors used are for the buttons, form and quiz borders, for these I went with two colors also pulled from the main image, an orange #ff8c00 and maroon red #d15d46. These colors provide a nice contrast across the site and compliment each other well. There are also different colors on the level buttons on the game.html page, to help the user identify the different levels. The font across the site is a dark slate grey, this gives a softer feel than using a harsh black, while some buttons have white text with a color background to pop and stand out.

## Images

All images were downloaded from Clean PNG. The images throughout the site follow the same simple design and provide fun visuals to the user, pulling in the blue, yellow and orange colors of the site.

# Languages

The languages used are HTML, CSS and Javascript.

# Technologies used

- Wireframe.cc was used to create the wireframes
- Google Fonts was used for the fonts
- Github was used for hosting the site and storing the data and files
- Google Chrome Developer Tools were used throughout to inspect elements and assist with troubleshooting and debugging
- [Image Color Picker](https://imagecolorpicker.com/en) was used to get color from the homepage image to use on the form and quiz border and text
- [Onlinecovert.com](https://www.onlineconvert.com/image-converter) to convert main large images from .jpg to .webp
  
# Testing

## Validation

### HTML

The code passed through the W3C HTML validator with no errors or warnings.

### CSS

The code passed through the Jigsaw CSS validator with no errors or warnings.

### Javascript

- A warning popped up to amend code within a function to dot notation as opposed to brackets, which I did for better practice.
- JSHint shows that there are two unused variables - validateForm and closePopup. However these are functions vital to the workings of the site and are called upon and used.

## Browser Compatability

The website was tested on the following browsers and was responsive and compatible:

- Google Chrome
- Mozilla Firefox
- Microsoft Egde

## Unfixed Bugs

...

## Responsiveness

Responsiveness was tested throughout the project using Chrome Developer tools and also ui.dev and responsivedesignchecker.com. All images and features were responsive in various screen sizes and quality was not affected as I was able to amend via media queries in my css file to ensure the website followed good UX design practices on all device screen sizes. Screenshots linked below as examples, site was tested on multiple view ports such as Iphone SE, Samsung Galaxy S8+, iPad Air, iPad Mini, Samsung Galaxy A51/71, Nexus 7 and 9, as well as a 24 inch monitor screen. [Link to Test Screenshots](https://github.com/DaniCarmo/elementary-stars-p2/tree/main/assets/readme-image)

![home](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/Test-screenshots/Lighthouse/lighthouse_home.png?raw=true)

![levels](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/Test-screenshots/Lighthouse/lighthouse_levels.png?raw=true)

![easy-peasy](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/Test-screenshots/Lighthouse/lighthouse_easypeasy.png?raw=true)

![smarty-pants](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/Test-screenshots/Lighthouse/lighthouse_smartypants.png?raw=true)

![quiz-master](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/Test-screenshots/Lighthouse/lighthouse_quizmaster.png?raw=true)

## User Stories Testing

As a first-time user I want to:

Easily navigate through the site and go to the appropriate level for each players ability: This is carried out via the nav bar which is dsplayed at the top of the pages to either bring the user back to home page or the levels page so they can chose their level. The level names reflect the difficulty of the quiz level - Easy-peasy is the easiest level, Smarty Pants is a medium to difficult level for those feeling like a smarty pants, and finally the hardest level is Quiz Master, for users who are masters of the alphabet, numbers, shapes and colors.

![header-navbar](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/level%20nav.png?raw=true)

![levels](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/levels.png?raw=true)

Be able to easily identify the purpose of the site. The user can identify what this site is about from the name which is taken from the school system 'Elementary', as well as the other piece of text on the home page under the logo:

![main-text](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/main%20text.png?raw=true)

View the website on both mobile and desktop devices. The site is fully repsonsive on various mobile, tablet and desktop devices, as per screen shots provided in seprate file.

Get a sense of community and welcoming from the Elementary Stars Quiz. This is acheived through the usage of fun and inviting colors and images, as well as the quiz storing the username and providing a welcome back message upon return to the homepage.

![about-pg](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/welcome%20back.png?raw=true)

Interact with the Elementary Stars by following learning videos on the YouTube channel. The modal is incorporated to encourage the user to follow Elementary Stars on YouTube and subscribe to more learning videos.

![newsletter](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/modal.png?raw=true)

As a returning user I want to:

- Practice over and over again to gain confidence and knowledge. This quiz allows the user to 'Play Again' as many times as they like, so they can practice each level over and over again and at their own pace. The user can also see their last scores and are encouraged to try beat this and improve with each try.

![score](https://github.com/DaniCarmo/elementary-stars-p2/blob/main/assets/readme-image/show%20score.png?raw=true)

- Have the quiz remember my username and last score to log in quicker and easier. Username is stored in local storage so returning users are welcomed back with a personalised message and their username is also pre-populated in to the username field on the homepage, so with one click a returning user can enter the quiz.
- View the website on both mobile and desktop devices. As mentioned the site is available to view on all devices and all features are fully responsive.

## Manual Testing

Manual testing was carried out on all elements and features of the site, ensuring no divs overlapped, images did not overflow, all internal links were working correclty and followed the correct path, and also all elements remain on screen and are legible on all device widths. Testing is also logged on the functions used and their accuracy in providing the desired outputs.

| Feature                  | Expected                                                                                                                                                                                                                 | Action                                                                                              | Result                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nav Bar Headings         | When clicked user is brought to desired page                                                                                                                                                                             | Clicked Home and Levels                                                                             | Each time was brought to the correct page                                                                                                                                                                                  |
| Username Form            | When user clicks on Lets Play btn they are prompted to enter a username if the field is left blank, otherwise user is brought to next page to chose their level                                                          | Clicked on Let's Play without entering a username, then entered username and click Let's Play again | When username field was left blank the prompt appeared, then once username was entered and clicked on Let's Play it brought me to the correct page                                                                         |
| Levels Buttons           | Each button should bring you to the correct page/level when clicked                                                                                                                                                      | Clicked on all three levels buttons                                                                 | Each time was brought to the correct page                                                                                                                                                                                  |
| Images                   | Pictures load on all pages for user to see                                                                                                                                                                               | Clicked on links to all five pages                                                                  | Brought to correct page and correct image loaded                                                                                                                                                                           |
| Quiz Container           | Answer boxes have white background until clicked - if correct the box will go green, if incorrect the box will go red and correct box will also show and turn green                                                      | Clicked on random answers on all three quiz pages multpile times                                    | All answer buttons initially had a white background and once clicked they either turned red or green, and if red then the correct green answer also revealed itself                                                        |
| Next Button              | Next button within the quiz container is hidden until user choses an answer so they cannot move on, once answer is button is clicked, the Next btn will appear and user can click to generate next questions and answers | Navigated to each levels page, clicked on answers and when Next btn appeared, clicked btn           | When levels pages loaded, there was no Next btn, btn was hidden, once an answer was clicked, whether right or wrong, the Next btn then became visbile, and once clicked I was provided with the next questions and answers |
| Show score               | Score is shown at the end of each quiz and user is prompted to click on play again btn                                                                                                                                   | Went through all quizzes to the end and clicked on play again                                       | At the end of quiz was presented with a box showing my score out of 5 and promted to play again, when play again was clicked I was brought back to start of same quiz                                                      |
| Modal                    | Modal pop up at the end of each quiz at the show score stage, in the middle of the page with a star image and text displayed clearly, and button to click OK to close pop up and return to current page                  | Went through each quiz to get to the end and when modal popped up clicked on OK btn                 | Modal popped up correctly on the correct page with clear display and when OK btn was clicked the modal closed                                                                                                              |
| Store username and score | Store username and last score in local storage so when user returns to home page they are greeted with welcome back message, their last score to beat, as well as username prepopulated in the username field            | Went through quiz, got score, navigated back to the home page                                       | Upon landing on the home page received a message to welcome me back with my username and last score, and username was correctly prepopulated in the username input field                                                   |

| Function         | Purpose                                                                                                                                                                                                                      | Conclusion                                                                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| shuffleArray     | Generate a random index between 0 and i to shuffle questions and produce different output sequence each game                                                                                                                 | function executes as intended, when user selects Play Again and brought back to the same level/quiz the questions are presented in a different order to the previous try |
| validateForm     | Function for validating the username form value to ensure it is not left blank/an empty string, and adding it to local storage                                                                                               | User cannot procced to game without entering a username and username is stored and shown when user revisits the home page                                                |
| setDifficulty    | Produce an if else statement to determine what page the user is on so the quiz can give the relevant questions for each page/level and call on the shuffleArray function to ensure questions are in a random order each time | function executes correctly as all questions shown per quiz/level are correct for that quiz and randomisation is added                                                   |
| showQuestion     | Function to display a question by manipulating the DOM and go through each question until there are no more                                                                                                                  | function executes as intended and questions are produced until all the available questions have been drawn upon                                                          |
| resetState       | Function to reset the state, move on to next question and hide the Next button again until next answer is selected                                                                                                           | user can easily move on to next question as quiz container is reset with white answer btns and Next btn is hidden                                                        |
| startQuiz        | Calls on setDifficulty and showQuestion functions to determine when to start the quiz                                                                                                                                        | function executes correctly                                                                                                                                              |
| selectAnswer     | Handles the selected answer by determining if it is correct or incorrect and changing color, and Next btn becomes visible                                                                                                    | function executes correctly as all answers when selected are visibly correct or incorrect to the user and they can move on to next question by clicking the Next btn     |
| openPopup        | Manipulate the DOM by adding classList to call on open-popup when popup/modal is required to reveal itself to user                                                                                                           | Modal is visible when required                                                                                                                                           |
| closePopup       | Manipulate the DOM by adding classList to call on close-popup to close the currently opne pop-up/modal                                                                                                                       | Modal is hidden when required                                                                                                                                            |
| showScore        | Show score to user at the end of quiz and save to local storage and open the modal before user can hit Play Again btn                                                                                                        | function executes as intended as user can view their score and presented with pop up modal info                                                                          |
| handleNextButton | Function to handle the next question or show the score by calling on showQuestions and showScore functions                                                                                                                   | once all questions have been used in current quiz then the site understands the quiz to be over and will show the score                                                  |

# Deployment

## Navigate to the GitHub Repository

1. Click the 'Settings' Tab.
2. Scroll Down to the Git Hub Pages Heading.
3. Select main branch as the source.
4. Click the Save button.
5. Click on the link to go to the live deployed page. Link to live wesbite: [Kindergarten Stars](https://danicarmo.github.io/elementary-stars-p2/)

## Run Project Locally

### Clone the Repository

1. Navigate to the GitHub Repository.
2. Click the Code drop-down menu.
3. Click the HTTPS sub-heading and copy the link.
4. Open your preferred IDE.
5. Open a terminal in the directory of your choice, type git clone and paste the link.
6. A clone of the repository will now be created on your machine.

### Download the Repository Manually

1. Navigate to the GitHub Repository.
2. Click the Code drop-down menu and Download ZIP.
3. Locate the ZIP file and extract it to a folder where you want the repository to be saved.
4. Open your preferred IDE.
5. Navigate to the directory where the repository was extracted.
6. You will now have the contents of the project available offline on your machine.

# Credits

## Content

- Followed a tutorial for creating quiz as well as implementing a modal on [@GreatStackDev](https://www.youtube.com/@GreatStackDev)
- Utilised [W3 Schools](https://www.w3schools.com/) and [StackOverflow](https://stackoverflow.com/) for troubleshooting throughout the project.

## Media

- The photos used throughout the website were downloaded from [Clean PNG](https://www.cleanpng.com/)
