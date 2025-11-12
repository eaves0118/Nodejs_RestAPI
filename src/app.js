const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const app = express();

//init middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

//init database
require("./dbs/init.mongodb");
const { checkOverload } = require("./helper/check.connect");
checkOverload();
//init routes

//handling error

module.exports = app;
