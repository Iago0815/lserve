const Lead = require("../models/lead");
const { errorHandler } = require("../helpers/dbErrorHandlers");

exports.returnLeads = (req,res) => {

    console.log(req.body);

res.json(req.body);

}

// exports.createLead = (req,res) => {

//         const lead = new Lead(req.body)
//         lead.save((err,data)=> {

//             if(err) {

//             console.log(err)
//             }
//             else {


//             res.json({data}); 
//             }

//         })
// } 

//Save document using create() and insertMany() --> https://www.youtube.com/watch?v=686pbLyBbGI