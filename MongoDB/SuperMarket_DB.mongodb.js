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

db.customers.insertMany([
  {
    _id: "cust_02",
    fName: "Ronnie",
    lName: "Aron",
    cPhone: "789123456",
    cAddress: {
      street: "456, Main St",
      city: "Bangalore",
      zipcode: "560001",
    },
  },
  {
    _id: "cust_03",
    fName: "Subash",
    lName: "K",
    cPhone: "23456123",
    cAddress: {
      street: "789 Main st",
      city: "Mysore",
      zipcode: "123456",
    },
  },
]);
