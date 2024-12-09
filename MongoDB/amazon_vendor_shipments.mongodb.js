use("Amazon");

db.createCollection("Shipments");

// db.Shipments.insertOne({
//   _id: "ship_01",
//   shipper: "UPS",
//   vendor_id: "Vend_01",
//   custormer_id: "cust_01",
//   product_id: "Pro_01",
// });

// $match, $group, $project, $lookup
// write an aggregation function on Shipments to display the id,name,and all vendor details
// db.Shipments.aggregate([
//   {
//     $lookup: {
//       // used to capture details from another collection
//       from: "Vendors",
//       localField: "vendor_id",
//       foreignField: "_id",
//       as: "Vendor_details",
//     },
//   },
// ]);

// db.Shipments.insertMany([
//   {
//     _id: "ship_02",
//     shipper: "DSA",
//     vendor_id: "Vend_02",
//     custormer_id: "cust_02",
//     product_id: "Pro_02",
//   },
//   {
//     _id: "ship_03",
//     shipper: "DocLine",
//     vendor_id: "Vend_03",
//     custormer_id: "cust_03",
//     product_id: "Pro_03",
//   },
// ]);

// write an aggregation function to display
// all the shipments along with their vendor details
//  and customer details

db.Shipments.aggregate([
  {
    $lookup: {
      from: "Vendors",
      localField: "vendor_id",
      foreignField: "_id",
      as: "Vendors_details",
    },
  },
  {
    $lookup: {
      from: "Users",
      localField: "custormer_id",
      foreignField: "_id",
      as: "customer_details",
    },
  },
]);
