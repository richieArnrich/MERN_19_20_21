// to create a new database
use("Amazon");

// to create a new collection
db.createCollection("Users");

// to insert one document:
// db.Users.insertOne({
//   Cust_Name: "Don",
//   Cust_Address: {
//     Street: "123 Main St",
//     City: "Bangalore",
//     State: "Karnataka",
//   },
//   Cust_Phone: "123-456-7890",
//   Cust_Email: "don@gmail.com",
// });

// to read the database
db.Users.find();
