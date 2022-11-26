var express = require('express');
var router = express.Router();
const playersCtrl = require('../controllers/players')

// router.get('/new', playersCtrl.new)
router.post('/new', playersCtrl.create)
router.get('/new', playersCtrl.listAll)
// router.get('/:id', playersCtrl.show)
router.delete('/:id', playersCtrl.delete);



module.exports = router;