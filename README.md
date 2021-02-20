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


## Project structure

The following tree describes as the project is structured 

<pre>
📦src
 ┣ 📂app
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂avatar
 ┃ ┃ ┃ ┣ 📜avatar.component.css
 ┃ ┃ ┃ ┣ 📜avatar.component.html
 ┃ ┃ ┃ ┣ 📜avatar.component.spec.ts
 ┃ ┃ ┃ ┗ 📜avatar.component.ts
 ┃ ┃ ┣ 📂inputbox
 ┃ ┃ ┃ ┣ 📜inputbox.component.css
 ┃ ┃ ┃ ┣ 📜inputbox.component.html
 ┃ ┃ ┃ ┣ 📜inputbox.component.spec.ts
 ┃ ┃ ┃ ┗ 📜inputbox.component.ts
 ┃ ┃ ┣ 📂notebox
 ┃ ┃ ┃ ┣ 📜notebox.component.css
 ┃ ┃ ┃ ┣ 📜notebox.component.html
 ┃ ┃ ┃ ┣ 📜notebox.component.spec.ts
 ┃ ┃ ┃ ┗ 📜notebox.component.ts
 ┃ ┃ ┗ 📂notes-container
 ┃ ┃ ┃ ┣ 📜notes-container.component.css
 ┃ ┃ ┃ ┣ 📜notes-container.component.html
 ┃ ┃ ┃ ┣ 📜notes-container.component.spec.ts
 ┃ ┃ ┃ ┗ 📜notes-container.component.ts
 ┃ ┣ 📂models
 ┃ ┃ ┗ 📜notes.model.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜resource.service.spec.ts
 ┃ ┃ ┗ 📜resource.service.ts
 ┃ ┣ 📜app.component.css
 ┃ ┣ 📜app.component.html
 ┃ ┣ 📜app.component.spec.ts
 ┃ ┣ 📜app.component.ts
 ┃ ┗ 📜app.module.ts
 ┣ 📂assets
 ┃ ┣ 📂img
 ┃ ┃ ┣ 📜avatar1.png
 ┃ ┃ ┣ 📜avatar2.png
 ┃ ┃ ┣ 📜avatar3.png
 ┃ ┃ ┣ 📜avatar4.png
 ┃ ┃ ┣ 📜avatar5.png
 ┃ ┃ ┣ 📜avatar6.png
 ┃ ┃ ┣ 📜avatar7.png
 ┃ ┃ ┣ 📜avatar8.png
 ┃ ┃ ┣ 📜df.jpg
 ┃ ┃ ┗ 📜example.PNG
 ┃ ┣ 📂json
 ┃ ┃ ┗ 📜notes.json
 ┃ ┣ 📂styles
 ┃ ┗ 📜.gitkeep
 ┣ 📂environments
 ┃ ┣ 📜environment.prod.ts
 ┃ ┗ 📜environment.ts
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜main.ts
 ┣ 📜polyfills.ts
 ┣ 📜styles.css
 ┗ 📜test.ts
</pre>


As it's shown above, the `otherpeoplenotes` application is dividided into 4 little angular components: the note's container, the notebox, the inputbox and the avatar.
Images and `notes.json` file are placed into assets folder. Styles, if globals, are written into file `style.css` otherwise each component has its own file css.
There's a service `resource.service` for handling an http GET request in order to achieve the file json in assets folder. 


## Functionality

Data are actually receveid by a static json internal "notes.json" of the project but they can be easily receveid from external resources.
Each note has same properties of its author : name, surname,  photo( or avatar), publishing date, publishing time and the text written.



-  The application display “other people” notes in the element from a static JSON contained in the assets of the project called "notes.json"
-  The final user can write text notes and publish it in the notes message list
-  Each note has the photo of the author, her/his name-surname and the publishing date and time
-  If a note is greater than three rows trim the rest of the content and show a “Read More” CTA  represented by `[...]` that expands the note message with the whole text.
-  All notes are sorted by publishing date (newest at bottom)
-  It's used browser LocalStorage for storing the messages that the final user have published  and keep them in the notes message list as long as user doesn’t delete browser cache (e.g. if I write: “Hello World!”, it will be displayed also if I refresh the page)
-  The application is responsive: min-width: 375px, max-width 1200px;


## Demo
It's available a working Demo deployed on `codesandbox.io` on this <a href="https://q9nhv.csb.app/" target="_blank">link</a>

## Setup
To run this project, install it locally using npm:

```
$ npm install
```

## Usage 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Future Improvements
It's possibile to substitute localStorage functionality with some real process of data storage. For example it's possible to use (with some little modifications) the resource.service in order to receive from RESTFul web services the notes stored in some database for example and also to push the notes written by the user via POST http request to RESTful web services.




