const {Router} = require('express');
const router = Router();
const User = require('../models/userModel');

// getAll
router.get('/', async (req,res) => {
    // res.send('1');
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({message: err})
    }

});
//getOneById
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({message: err})
    }
});
// create User
router.post('/create', async (req,res) => {
    // console.log(req.body);
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        login: req.body.login,
        password: req.body.password
    });

    try {
        const createUser = await user.save();
        res.json(createUser);
    } catch (err) {
        console.log(err);
        res.json({message: err})
    }
});

//updateInfo
router.patch('/update/:userId', async (req,res) => {
    try {
        const updatedUser = await User.updateOne(
            {_id: req.params.userId},
            {$set: {
                    name: req.body.name,
                    surname: req.body.surname,
                    login: req.body.login,
                    password: req.body.password
                }}
            );
        res.json(updatedUser);
    } catch (err) {
        res.json({message: err})
    }
});

//delete User
router.delete('/delete/:userId', async (req,res) => {
    try {
        const deleteUser = await User.deleteOne({_id: req.params.userId});
        res.json(deleteUser);
    } catch (err) {
        res.json({message: err})
    }
});


module.exports = router;
