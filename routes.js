let express = require('express'); //retourne une fonction dans la variable express
let router = express.Router();


let roomController = require('./controllers/roomController');

router.get("/room/add", roomController.roomAdd );
router.post("/room/list", roomController.roomList);
router.post("/room/new", roomController.roomNew);
module.exports = router;