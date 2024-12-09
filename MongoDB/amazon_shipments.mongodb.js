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

// insert many documents at a time:
// db.Users.insertMany([
//   {
//     _id: "cust_01",
//     Cust_Name: "Amith",
//     Cust_Address: {
//       Street: "456 Main St",
//       City: "Bangalore",
//       State: "Karnataka",
//     },
//     Cust_Phone: "987-654-3210",
//     Cust_Email: "amith@gmail.com",
//   },
//   {
//     _id: "cust_02",
//     Cust_Name: "Rahul",
//     Cust_Address: {
//       Street: "789 Main St",
//       City: "Chennai",
//       State: "Tamil Nadu",
//     },
//     Cust_Phone: "555-123-4567",
//     Cust_Email: "rahul@gmail.com",
//   },
//   {
//     _id: "cust_03",
//     Cust_Name: "Rohan",
//     Cust_Address: {
//       Street: "321 Main St",
//       City: "Mumbai",
//       State: "Maharashtra",
//     },
//     Cust_Phone: "111-222-3333",
//     Cust_Email: "rohan@gmail.com",
//   },
// ]);

db.Users.find();
