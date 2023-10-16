const express = require('express')
const controller = require("../controllers/Admincontroller")
const router = express.Router();

router.post('/signup', controller.signup)
router.post('/login', controller.login)
router.get("/editdata/:id", controller.editdata);
router.get('/deletedata/:id', controller.deletedata);
router.post("/Update", controller.Update);
router.get("/", controller.showdata);


module.exports = router;