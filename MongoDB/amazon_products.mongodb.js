use("Amazon");

db.createCollection("Products");

// db.Products.insertMany([
//   {
//     _id: "Pro_01",
//     Pro_Name: "iPhone 16",
//     Pro_Price: 999.99,
//     Pro_Manufacturer: "Apple",
//     Pro_Description: "Apple iPhone 16.",
//   },
//   {
//     _id: "Pro_02",
//     Pro_Name: "Samsung S22",
//     Pro_Price: 799.99,
//     Pro_Manufacturer: "Samsung",
//     Pro_Description: "Samsung S22.",
//   },
//   {
//     _id: "Pro_03",
//     Pro_Name: "Google Pixel 6",
//     Pro_Price: 699.99,
//     Pro_Manufacturer: "Google",
//     Pro_Description: "Google Pixel 6.",
//   },
//   {
//     _id: "Pro_04",
//     Pro_Name: "OnePlus 9",
//     Pro_Price: 599.99,
//     Pro_Manufacturer: "OnePlus",
//     Pro_Description: "OnePlus 9.",
//   },
//   {
//     _id: "Pro_05",
//     Pro_Name: "Xiaomi Redmi 10",
//     Pro_Price: 499.99,
//     Pro_Manufacturer: "Xiaomi",
//     Pro_Description: "Xiaomi Redmi 10.",
//   },
// ]);

db.Products.find();
