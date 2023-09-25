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

### CSS

The code passed through the W3C CSS validator with no errors or warnings.

### Javascript

A warning popped up to amend code within a function to dot notation as opposed to brackets, which I did for better practice.

## Browser Compatability

The website was tested on the following browsers and was responsive and compatible:

- Google Chrome
- Mozilla Firefox
- Microsoft Egde

## Unfixed Bugs

...

## Responsiveness

Responsiveness was tested throughout the project using Chrome Developer tools and also ui.dev and responsivedesignchecker.com. All images and features were responsive in various screen sizes and quality was not affected as I was able to amend via media queries in my css file to ensure the website followed good UX design practices on all device screen sizes. Screenshots linked below as examples, site was tested on multiple view ports such as Iphone SE, Samsung Galaxy S8+, iPad Air, iPad Mini, Samsung Galaxy A51/71, Nexus 7 and 9, as well as a 24 inch monitor screen. [Link to Test Screenshots](https://github.com/DaniCarmo/elementary-stars-p2/tree/main/assets/readme-image)

![home](https://github.com/DaniCarmo/South-West-Yoga-P1/blob/main/assets/testing-images/lighthouse-home.png?raw=true)

![about](https://github.com/DaniCarmo/South-West-Yoga-P1/blob/main/assets/testing-images/lighthouse-about.png?raw=true)

![gallery](https://github.com/DaniCarmo/South-West-Yoga-P1/blob/main/assets/testing-images/lighthouse-gallery.png?raw=true)

![classes](https://github.com/DaniCarmo/South-West-Yoga-P1/blob/main/assets/testing-images/lighthouse-classes.png?raw=true)

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

Manual testing was carried out on all elements and features of the site, ensuring no divs overlapped, images did not overflow, all internal links were working correclty and followed the correct path, and also all elements remain on screen and are legible on all device widths.

| Feature              | Expected                                                                                                                                        | Action                                                                                             | Result                                                                                                                                    |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Nav Bar Headings     | When clicked user is brought to desired page                                                                                                    | Clicked Home, About, Gallery and Classes on nav bar                                                | Each time was brought to the correct page                                                                                                 |
| Social Media Icons   | When clicked user is brought to an external link to the home page of the social media sites                                                     | Clicked on the Twitter, Instagram and Facebook icons                                               | Each time was brought to the correct page                                                                                                 |
| Newsletter sign up   | Email input should only accept email addresses and not random input and when user click subscrive they are brought back to home page of website | Entered a name in to the email address bar and then entered proper email address                   | Notification of an invalid email address poppeed up, I then entered an email address and clicked submit and was brought back to home page |
| Benefits boxes       | When link to timetable classes are clicked user is brought to classes page                                                                      | Clicked on both yoga and meditation class timetable links                                          | Was brought to the Classes page to the timetables                                                                                         |
| Gallery              | When image is clicked it gets bigger x 1.5                                                                                                      | Clicked on images in gallery                                                                       | Images got bigger - came forward as expected                                                                                              |
| iframe               | Is respsonsive to zooming in and out and can be clicked to take user to google maps external page                                               | Zoomed in and out and moved around on the maps iframe, and clicked on the "View larger map" button | Map moved in and out as desired and external Google maps link opened                                                                      |
| Scroll to top button | When clicked the user is brought to the top of the current page                                                                                 | Clicked on button when viewing on mobile in each page                                              | Brought to the top of the current page using smooth scroll feature                                                                        |

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
