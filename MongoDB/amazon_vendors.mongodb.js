use("Amazon");

// create Vendors collection
db.createCollection("Vendors");

// db.Vendors.insertMany([
//   {
//     _id: "Vend_01",
//     vend_name: "Pinto Mobiles",
//     vend_address: "123, ABC Street",
//     vend_city: "Bangalore",
//     vend_state: "Karnataka",
//     products: [
//       {
//         product_id: "Pro_01",
//       },
//       {
//         product_id: "Pro_02",
//       },
//     ],
//   },
//   {
//     _id: "Vend_02",
//     vend_name: "Ganesh Electronics",
//     vend_address: "456, DEF Street",
//     vend_city: "Mumbai",
//     vend_state: "Maharashtra",
//     products: [
//       {
//         product_id: "Pro_03",
//       },
//       {
//         product_id: "Pro_04",
//       },
//     ],
//   },
//   {
//     _id: "Vend_03",
//     vend_name: "Sai Mobiles",
//     vend_address: "789, GHI Street",
//     vend_city: "Chennai",
//     vend_state: "Tamil Nadu",
//     products: [
//       {
//         product_id: "Pro_01",
//       },
//       {
//         product_id: "Pro_02",
//       },
//       {
//         product_id: "Pro_03",
//       },
//     ],
//   },
// ]);
// db.Vendors.insertOne({
//   _id: "Vend_04",
//   vend_name: "Pinto Mobiles",
//   vend_address: "123, ABC Street",
//   vend_city: "Hubbali",
//   vend_state: "Karnataka",
//   products: [
//     {
//       product_id: "Pro_01",
//     },
//     {
//       product_id: "Pro_02",
//     },
//   ],
// });

db.Vendors.aggregate([
  {
    $project: {
      name: 1,
      productIds: {
        $map: {
          input: "$products",
          as: "product",
          in: "$$product.product_id",
        },
      },
    },
  },
  {
    $lookup: {
      from: "Products",
      localField: "productIds",
      foreignField: "_id",
      as: "ProductDetails",
    },
  },
]);
