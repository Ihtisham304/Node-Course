const User = require('../models/userModel');
const jwt  = require('jsonwebtoken');

exports.getAllUsers = (async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users, message: 'readind all users' });
        console.log('All users ', users);
    } catch (error) {
        res.status(400).json({ message: 'error reading all users' });
        console.log('erro reading all users');
    }
})
exports.updateUser = (async (req, res) => {
    const id = req.params.id;
    const reqUser = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, reqUser, { new: true });
        res.status(400).json({ updatedUser, message: 'updated user' });
        console.log('updated user', updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'error while update user' });
        console.log('error updating user', error);
    }
})
exports.deleteUser = (async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({ deletedUser, message: 'delete product successFully' });
        console.log('delete product is', deletedUser)
    } catch (error) {
        res.status(400).json({ message: 'error while deleting user' });
        console.log('error deleting user', error);
    }
})

