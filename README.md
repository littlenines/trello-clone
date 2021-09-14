# trello-clone
This project is mainly used for practicing Nuxtjs,Vuetify and VueJs <br>
As for the backend Firebase was used for adding pictures , signup , login and storing tables for the specific user etc <br>
Added media quearies for different monitor sizes , mostly on the main page , need to start working on cleaner and more understandable code cuz i still suck at it, need to put more work on that
<br><br>
## Front page gif
![](https://github.com/littlenines/trello-clone/blob/36c3215fadf4bc66053f61918bb95d935eb4bc42/trello1.gif)
## Loged in page gif
![](https://github.com/littlenines/trello-clone/blob/36c3215fadf4bc66053f61918bb95d935eb4bc42/trelloColor.gif)

## Setting Firebase
Step 1: When creating `Your Firebase project` we need to copy and paste configuration in `nuxt.config.js` , which should look like this: <br> <br>
```
// Insert your Firebase configuration
        config: {
          apiKey: "",
          authDomain: "",
          projectId: "",
          storageBucket: "",
          messagingSenderId: "",
          appId: ""
        },
```
Step 2: Go to `Authentication` -> `Sign-in method` and enable `Email/Password` <br> <br>
![](https://github.com/littlenines/trello-clone/blob/af45890d093f38bef2091414af53f989be85ed50/How%20it%20looks/email.png) <br>

Step 3: Go to `Firestore Database` and `Create database` <br> <br>
![](https://github.com/littlenines/trello-clone/blob/af45890d093f38bef2091414af53f989be85ed50/How%20it%20looks/base.png) <br>

Step 4: Go to `Storage` and create new folder named `images` <br> <br>
![](https://github.com/littlenines/trello-clone/blob/af45890d093f38bef2091414af53f989be85ed50/How%20it%20looks/storage.png)
