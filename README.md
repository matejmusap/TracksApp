"# TracksApp"

Simple express app woth three routes

To run it locally first clone repo to your machine -- "git clone https://github.com/matejmusap/TracksApp.git"
Run "npm install" to install dependencies.
Run command "npm run start" or "node index.js".
If you not set port as enviromental variable, default port is 3000.
Visit http://localhost:3000/ orhttp://localhost:yourport/ and you will be redirected.





App is also avaliable on https://lit-ocean-58949.herokuapp.com/
***NOTE Need to put / on the end of heroku app path to prevent app from getting 404!!

***Routes are:


/ - will redirect you to /tracks

/tracks - will list all tracks

/tracks/getbyid/:id - will get track object with unique id

/tracks/sorted - by providing query string sortBy with values name or duration, will get sorted list of all tracks by condition