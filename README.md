"# TracksApp"

Simple express app with three routes

To run it locally first clone repo to your machine -- "git clone https://github.com/matejmusap/TracksApp.git".<br/>
Run "npm install" to install dependencies.<br/>
Run command "npm run start" or "node index.js".<br/>
If you not set port as enviromental variable, default port is 3000.<br/>
Visit http://localhost:3000/ or http://localhost:yourport/ and you will be redirected.<br/>
App is also avaliable on https://lit-ocean-58949.herokuapp.com/<br/>

***NOTE Need to put / on the end of heroku app path to prevent app from getting 404!!


***Routes are:

/ - will redirect you to /tracks<br/>
/tracks - will list all tracks<br/>
/tracks/getbyid/:id - will get track object with unique id<br/>
/tracks/sorted - by providing query string sortBy with values name or duration, will get sorted list of all tracks by condition<br/>
