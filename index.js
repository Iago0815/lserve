const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');

require('dotenv').config();
const authRoutes = require("./routes/auth");
const leadRoutes = require("./routes/leads");
const userRoutes = require("./routes/user");

const app = express();

//db
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("Database connected");
});

//middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//-> cookieparser!!


//routes middleware 
app.use("/api",authRoutes);
app.use("/api",leadRoutes);
app.use("/api",userRoutes);

const port = process.env.PORT || 8080

app.listen(port,() => {

    console.log(`Hello world, port ${port}`);
});





