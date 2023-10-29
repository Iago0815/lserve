const express = require("express");
const router = express.Router();
const Lead = require("../models/lead");


const { returnLeads, createLead } = require("../controllers/lead")
const { requireSignin,isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/leads/csv",returnLeads)
router.post("/leads/create",(req,res) => {

        Lead.insertMany(req.body)
        .then((data)=> {

          res.status(201).send(data)
        }).catch((error) => {

            res.status(400).send(error);
        })
});

router.param("userId",userById);

module.exports = router