const express = require('express')
const router = express.Router()

router.get('/welcome', async (req, res) => {
    try {
        const user = req.loggedInUser;
        res.json({
            message: "Hello "+user.firstName
        })
    } catch (error) {
        res.json({msg: error.message})
    }
});


module.exports = router