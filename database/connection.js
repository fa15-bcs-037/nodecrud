const mongoose = require("mongoose");
const constant = require("../const/config");

mongoose.connect(constant.getDbConnctionString, { useNewUrlParser: true });
const db = mongoose.connection;
module.exports = { connection: db };
