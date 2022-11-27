var express = require('express');
var router = express.Router();
const playersCtrl = require('../controllers/players')

router.get('/', playersCtrl.index)
router.get('/new', playersCtrl.newPlayer)
router.post('/', playersCtrl.create)
router.get('/:id', playersCtrl.playerInfo)
router.post('/:id', playersCtrl.update)
router.delete('/:id', playersCtrl.delete);




module.exports = router;