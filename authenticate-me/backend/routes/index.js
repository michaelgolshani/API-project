//create an Express router

const express = require ('express')
const router = express.Router()


// create a test route
router.get("/hello/world", function (req,res) {
  res.cookie('XRSF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});


//export the router at the bottom of the file
module.exports = router;
