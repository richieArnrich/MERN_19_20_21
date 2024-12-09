// use Amazon db
use("Amazon");

// write a query to display the details of customer with id
// cust_02

// db.Users.find({ _id: "cust_02" });

// update the name of customer with id cust_03
// db.Users.updateOne({ _id: "cust_03" }, { $set: { Cust_Name: "Rohit" } });

// db.Users.insertOne({
//   _id: "cust_04",
//   Cust_Name: "Not required guy",
//   Cust_Address: "Not required guy",
//   Cust_Phone: "Not required guy",
// });

// delete the customer with id 4
// db.Users.deleteOne({ _id: "cust_04" });
// db.Users.find();

// to see the explaination of execution
// db.Users.find({ Cust_Name: "Amith" }).explain("executionStats");

// create index for amith
// db.Users.createIndex({ Cust_Name: 1 });
// db.Users.find({ Cust_Name: "Amith" }).explain("executionStats");
// to fetch using index
db.Users.find({ Cust_Name: "Amith" }).hint({ Cust_Name: 1 });
db.Users.find({ Cust_Name: "Amith" }).explain("executionStats");
