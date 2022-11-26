# NBA LEAGUE

###   NBA LEAGUE LINK: [HERE](https://index-crm-system.herokuapp.com)

---

## Background 🏞

The project includes space for tracking the standings of the NBA league, the ability to view and add new players that you want comment under  as needed, and space to read the comment and stay updated with your team's place in the league. These features allow for basketball fans to stay always connected to your team and the other fans that support the same team. 

This CRUD application was developed using RESTful architecture principles and MEN stack technologies (MongoDB, ExpressJS & Node.js)

Planning materials for this project were done on Trello board (view [here](https://trello.com/b/UMuYDshQ/nba-league))

WIREFRAME: (view [here](https://app.diagrams.net/#G1GxDqREd2mFcLWsZ-MtJmpkCkoiMYS3VU))

ERD: (view [here](https://app.diagrams.net/#G1QaxznWV-m5zz1KJu4kjrj6yG1LYY4H8k))

## Technologies Used 
![HTML5]
![CSS3]
![JavaScript]
![NodeJS]
![Express.js]
![MongoDB]
![Heroku]
![GitHub]
![Visual Studio Code]
![Trello]

---
## Application Description

Once a user has logged in with Google OAuth, they will be brought to an index view of the standings for the NBA with the n. Users will not be able to see clients that they have not entered into the database. 


From the index view of all clients, the user is able to navigate throughout the application. 

The user can choose to add a new client, move to their to-do list using the left navigation bar, delete a client, or enter the client's profile view. 

Clicking the "Add a New Client" button (located at the top of the client index view) will bring the user to a basic form where they can enter client details. 


Upon submitting this form, the user is automatically redirected to the client index view, where they can see all of their clients. 

To view or edit a choosen client, the user simply needs to click on their name (highlighed in blue) on the client index page. 

The client profile page allows the user to see all information about a particular client, as well as add conversations had with this client. 

Client conversations added on this page are specific to this client only, and not shared throughout the remainder of clients in the application. 

Should the user need to edit information for this client, clicking on the green pencil button in the top-left screen will produce an edit client page. 


Editing a client will automatically change information previously entered when the client was created or last edited. After updating necessary fields and clicking "Save Client" the user will be redirected to that client's profile page to view recent changes. 

At any time during application use, the user can seamlessly navigate to their to-do list using the left navigation bar. Expanding this bar will show navigation options in English, however, the user can also click on the "clipboard" icon as well.


This page utilizes an embedded form for entering new to-do list items and will automatically update the following to-do list after a new item has been added. 

Clicking the checkbox to the left of an active to-do item will "cross the item off." This action will not remove the to-do from view, but will only "cross it off." In order to remove a to-do list item permanently, click on the green "X" button to the right of the specified to-do. 

>For example purposes, all of the above "clients" are fictional. 

---

## Icebox Features 🧊
While this application accomplishes a lot of user-functionality, there are a number of icebox features which will be added as availability permits. Here are some of the future upgrades... 

- Add functionality to delete specific client conversations 
- Add search capability to find clients by name
- Add "pop-up" verification when deleting a client (as a double check for user)
- Add dark/light mode toggle (with respect to user settings)
- Allow users to upload a document for specific clients (such as a resume, or cover letter)
- Add navigation to an integrated Google Calendar (which will allow users to integrate meeting scheduling)
