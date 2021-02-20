## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Functionality](#functionality)
* [Demo](#demo)
* [Setup](#setup)
* [Usage](#usage)


## General info
This project is a development of a component representing a blocknotes containing notes written by some people. The user can write new notes.
<img src="https://github.com/franke92/otherpeoplesnotes/blob/main/src/assets/img/example.PNG" alt="example" />

	
## Technologies
Project is created with:
* Angular version 8.3.4.
* CSS3   
* HTML5
	


## Functionality

Data are actually receveid by a static json internal "notes.json" of the project but they can be easily receveid from external resources.
Each note has same properties of its author : name, surname,  photo( or avatar), publishing date, publishing time and the text written.
The blocknotes component is subdivided into 4 little components: the note's container, the notebox, the inputbox and the avatar.


-  The application display “other people” notes in the element from a static JSON contained in the assets of the project called "notes.json"
-  The final user can write text notes and publish it in the notes message list
-  Each note has the photo of the author, her/his name-surname and the publishing date and time
-  If a note is greater than three rows trim the rest of the content and show a “Read More” CTA  represented by `[...]` that expands the note message with the whole text.
-  All notes are sorted by publishing date (newest at bottom)
-  It's used browser LocalStorage for storing the messages that the final user have published  and keep them in the notes message list as long as user doesn’t delete browser cache (e.g. if I write: “Hello World!”, it will be displayed also if I refresh the page)
-  The application is responsive: min-width: 375px, max-width 1200px;


## Demo
It's available a working Demo deployed on `codesandbox.io` :  https://q9nhv.csb.app/

## Setup
To run this project, install it locally using npm:

```
$ npm install
```

## Usage 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Future Improvements




