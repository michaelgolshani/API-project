////The main purpose of this Express application is to be a REST API server. All the API routes will be served at URL's starting with /api/

//Get started by nesting an api folder in your routes folder. Add an index.js file in the api folder with the following contents:


const router = require('express').Router();

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});




module.exports = router;
