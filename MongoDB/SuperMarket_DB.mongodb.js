// to use a database
use("MYSupermarket");

// create a collection called customers
db.createCollection("customers");

// insert one data to customers
// db.customers.insertOne({
//   _id: "cust_01",
//   fName: "Anil",
//   lName: "Kumar",
//   cAddress: {
//     street: "123, Main St",
//     city: "Bangalore",
//     zipcode: "560030",
//   },
// });

// db.customers.insertMany([
//   {
//     _id: "cust_02",
//     fName: "Ronnie",
//     lName: "Aron",
//     cPhone: "789123456",
//     cAddress: {
//       street: "456, Main St",
//       city: "Bangalore",
//       zipcode: "560001",
//     },
//   },
//   {
//     _id: "cust_03",
//     fName: "Subash",
//     lName: "K",
//     cPhone: "23456123",
//     cAddress: {
//       street: "789 Main st",
//       city: "Mysore",
//       zipcode: "123456",
//     },
//   },
// ]);

// db.customers.insertMany([
//   {
//     _id: "cust_04",
//     fName: "Liana",
//     lName: "R",
//     cPhone: "123456",
//     cAddress: {
//       street: "123, Main St",
//       city: "Bangalore",
//       zipcode: "560030",
//     },
//   },
//   {
//     _id: "cust_05",
//     fName: "Rahul",
//     lName: "Kumar",
//     cPhone: "987654321",
//     cAddress: {
//       street: "456, Main St",
//       city: "Ooty",
//       zipcode: "560001",
//     },
//   },
// ]);

// to find all customers
// db.customers.find();

// find the customer with the id 5
// db.customers.find({ _id: "cust_05" });

db.customers.find({ fName: { $regex: "^A", $options: "i" } });
