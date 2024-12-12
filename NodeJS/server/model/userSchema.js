const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Cust_Name: String,
  Cust_Address: Object,
  Cust_Phone: String,
  Cust_Email: String,
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
