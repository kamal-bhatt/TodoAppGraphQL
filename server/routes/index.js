var express = require('express');
var router = express.Router();
const RequestAutheticator = require("../middleware/RequestAutheticator")
console.log(RequestAutheticator)
/* GET home page. */
router.get('/',RequestAutheticator.auth,function(req, res, next) {
  res.json({ title: 'Express' });
});

module.exports = router;
