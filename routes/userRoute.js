const express = require('express')
const router = express.Router();
const userController = require('../controllers/user-controller');


router.get('/getAllUser',userController.getAllUsers);
router.put('/updateUser/:id',userController.updateUser);
router.post('/deleteUser/:id',userController.deleteUser);



module.exports = router;