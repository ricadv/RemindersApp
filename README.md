

# Code Structure
(Main Branch):
	Controller - The files in the controller directory contain the functions used throughout the web application
		Auth_controller.js - User authentication
		Friend_controller.js - Friends list-related functionality
		Reminder_controller.js - Functions using reminders in any way
Views - The files in the views directory contain the page layouts for the web application, including partials
	Auth - Pages connected to the authorization functionality (login and register)
		Login.ejs - Login Page
		Register.ejs - Registration Page
	Partials - Page elements used across multiple pages
		Navbar.ejs - Navigation Bar
	Reminder - Pages related to the reminder functionality (view, edit, create, etc.)
		Create.ejs - Create Reminder
		Edit.ejs - Edit Reminder
		Index.ejs - Reminder index (all reminders)
		Single-reminder.ejs - Single reminder view
	Friend - Pages related to friends list functionality
		Friendlist.ejs - Friends list
	Layout.ejs - A base layout used for every other page
Middleware - The files in the middleware directory are used to check if the user is still signed in
	Auth.js - Check if the user is logged in
	Exit.js - Check if the user has exited the application/signed out
Public - This directory is used for the public landing page
	Img - contains images used in the page
	Index.html - The front landing page
	Script.js - JavaScript code used in the landing page
	Style.css - Landing page stylesheet
Database.js - Contains database information to be used in the application
Index.js - Contains the base server functionality alongside all the routes in use
	


# Incomplete Tasks/Improvements to Make

Add friends:
Friends ejs page that displays list of all the users in the database, except for the user of the cookie session.
Each list item will have a button/toggle to add friend/ remove friend
When add friend is clicked, the friend email (used to identify users in the database) will be added to the friends list of the user in the database ~ array.push()
When remove friend is clicked, the friend is removed from the database ~ array.filter()
Try to use fetch() to post without needing to change or refresh page

Profile:
Create page that allows users to change their username and profile picture
Maybe would be combined with the add friends page

Reminders:
Require reminders to have a title: 
use string.trim() method and check if title != “”
If title is empty, show prompt to enter title

Tags:
Be able to click on tags to sort the reminders list and show only the reminders with the tag selected.
Maybe use query parameter => each tag has a url, like /reminders/:tag => render index.ejs with only the reminders that have the tag

Strong password check:
Check if password length is 8 characters or more
Check for at least one uppercase and one lowercase letter
Check for at least one special character

Passport authentication:
Include passport.authenticate for google, facebook, and/or twitter at signup


# Installation Instructions
	Prerequisites: Node.js
		Node.js can be downloaded here: https://nodejs.org/en/download/ or installed using a package manager of your choice (package name: nodejs)
	

Clone the repository to a local directory on your computer:
	
Option 1:
In a terminal, change to the directory you want to install the app into.

Run command: git clone https://github.com/ricadv/RemindersApp.git

	Option 2:
		Download the app in a zip file from https://github.com/ricadv/RemindersApp.git
		
		Unzip the file into the directory you want to install the app into.

Install node packages

		In a terminal, change to the directory containing the package.json.

Run command: npm install

Start the server

		Run command: npm start

		🚀


When the server is running, you can go to localhost:3001/ in your browser to access the app landing page.



API integration:

Google place search/photo API is integrated in the application to show the picture of the location that users enter in the location text field when creating a reminder, so when users are viewing their reminders, it includes the picture of the location. (but the code is broken)
Debug the API code



# Group members
Rica De Vera, Fifi Rezaeian, Joseph Wong, Kevin Bowles
