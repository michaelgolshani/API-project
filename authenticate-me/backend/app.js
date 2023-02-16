const express = require ('express'); //initialize your Express application.
require ('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const {environment} = require('./config');
const isProduction = environment === 'production';  // Create a variable called isProduction that will be true if the environment is in production or not by checking the environment key in the configuration file (backend/config/index.js):


const app = express();  // Initialize the Express application:

app.use(morgan('dev')) ; //Connect the morgan middleware for logging information about requests and responses:

app.use(cookieParser()); //Add the cookie-parser middleware for parsing cookies
app.use(express.json())  // Add the express.json middleware for parsing JSON bodies of requests with Content-Type of "application/json"


// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

app.use(

  helmet.crossOriginResourcePolicy({
    policy:"cross-origin"
  })
);


app.use (
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);


