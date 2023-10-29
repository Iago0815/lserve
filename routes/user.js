const express = require("express");
const router = express.Router();

const { requireSignin,isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");


router.get('/secret/:userId',requireSignin,isAuth, (req,res) => {

    //base on the userid we will repond with the user information
    res.json({

        user:req.profile
    });
})

router.param("userId",userById);

module.exports = router;