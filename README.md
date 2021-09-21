<p align="center">
  <h1 align="center"> One Cloud</h1>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#implementation">Implementation</a></li>
        <li><a href="#technology-stack">Technology Stack</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- GETTING STARTED -->
   

<!-- ABOUT THE PROJECT -->
## About The Project

  ### Introduction
  
  A project that allows users to upload, update, delete & share music, image, and video files with required authorisation and authentication


  ### Implementation: 
  On the client side, the web pages were implemented using **ReactJs** as a frontend framework.

  On Server side, **NodeJs** is used as a runtime environment, with **Express** as a framework and **MongoDB Atlas** as a cloud database. 

  **AWS** has been used as a data hosting service for audio, image and video files.
  
  The server is deployed on **Heroku** and client is deployed on **Netlify**. 

  ### Technology Stack:
  * Frontend
      * ReactJS
      * CSS
      * JavaScript
      * Material UI
  * Backend
      * NodeJS
      * ExpressJS
  * Database
      * MongoDB
  * Data Hosting Service
      * AWS   
  * Deployment Services
      * Heroku
      * Netlify


## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `actions` - This folder holds actions to be dispatched
    - #### `api` - This folder holds api integration with the server side of application
    - #### `components` - This folder holds all of the different components that make up the frontend
    - #### `constants` - These represent action types for reducers
    - #### `reducers` - These represent the usage of redux.js for global store
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `helpers` - This holds multer configuration for file upload
- #### `middleware` - This holds authentication middleware
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `upload` - This folder is used as a temporary storage for uploaded file
- #### `index.js` - Defines npm behaviors and packages for the client
- #### `.env` - This holds our configuration files, like mongoDB uri
#### `package.json` - Defines npm behaviors
#### `.gitignore` - Tells git which files to ignore

## Getting Started
### Prerequisites

* NodeJS
* NPM
* MongoDB Atlas
* AWS S3
* IDE(Visual Code Studio)
* Git

### Installation

1. Clone the repo
   ```
   git clone https://github.com/anmolsahu2k/One-Cloud.git
   ```
2. Install NPM packages in client side
   ```
   cd client
   npm install
   ```
3. Install NPM packages in server side
   ```
   cd server
   npm install
   ```
3. Enter your credentials in '.env'
   ```
    Check env.example file to configure environment variables 
   ```

### To Run

1. Run client side
   ```
   cd client
   npm start
   ```
2. Run server side
    ```
    cd server
    npm start
    ```
3. Open application on brower- https://localhost:3000
 
<!-- License -->
## License
MIT License  :balance_scale:

<!-- CONTACT -->
## Contact

- Anmol Sahu - anmolsahu2k@gmail.com

Project Link: [https://github.com/anmolsahu2k/One-Cloud](https://github.com/anmolsahu2k/One-Cloud)

Made as a part of QuantaVid LLC internship task.
