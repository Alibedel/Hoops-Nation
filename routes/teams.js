var express = require('express');
var router = express.Router();
const { getTeams } = require("../controllers/teams");

/* GET teams listing. */
router.get('/', function(req, res, next) {
    res.render('teams/index',{
        user: req.user
    });
  });


module.exports = router;

