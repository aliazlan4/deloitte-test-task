# Deloitte - Online Todo List Test Task


It is an Online ToDo App that supports user signup, login and todos listing, creations and deletion. All the data in the application is persisted in a MongoDB app. Application is dockerized for easy setup. Following is the tech stack of the application.

  - NodeJS
  - Express.js
  - MongoDB
  - React.js

### Setup
Follow the below given commands to start the application:
```sh
$ git clone "https://github.com/aliazlan4/deloitte-test-task"
$ cd deloitte-test-task
$ docker-compose up -d
```

After the successful execution of the above commands, application can be accessed at the following URL:
```sh
http://127.0.0.1:8080
```

### Security Considerations
This application is built with proper security considerations. Some of them are given below:
 - Passwords are being hashed before storing to the database
 - Server side form validations
 - User authentication and authenticated sessions with Passport.js

Following things are required if this production is to be deploy in production environment:
 - MongoDB port should be restricted outside access
 - Application should be served on HTTPS as the passwords are being passed in plain-text to the api where they are hashed before storing in database or checking for login.


### Login details for testing
Application signup process is pretty simple and a user can signup with a username and password greater than 6 characters. So no demo user detail is provided.

### Extra things I would have done
If I would have more spare time then I would have added following features to the application:
 - Forgot password functionality
 - login / signup throttling
 - Todo creation throttling to prevent spam
 - Better UI
 - A better user side form validations
 - Todo browser pushup reminders
 - Google / Facebook Authentication
 - Unit tests
 - Code Comments

### Credits
To make a better application in a less time I have used a React.JS boilerplate for the application. Also, I have used Passport.js authentication strategy from their official examples.
