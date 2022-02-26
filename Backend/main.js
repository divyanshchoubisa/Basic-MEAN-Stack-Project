//Importing Important Modules and Routes
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./connection.js');
const blogRoute = require('./routes/blogRoute.js');
const cors = require('cors');

//Creatig Express App and Using it
const app = express();
app.use(bodyParser.json());
//Using Cross-Origin Resource Sharing (CORS) to communicate with frontend application.
app.use(cors({origin: 'http://localhost:4200'}));

//Listining the server on port 8000 and app will be using blog routes
app.listen(8000, () => console.log("Server Started At Port: 8000"));
app.use('/blog', blogRoute)