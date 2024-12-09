use("Amazon");

// write an aggregation function to display details of vend_01
// db.Vendors.aggregate([
//   {
//     $match: {
//       _id: "Vend_01",
//     },
//   },
// ]);

// write an aggregation function to display vendors from city Bangalore
// db.Vendors.aggregate([
//   {
//     $match: {
//       vend_city: "Bangalore",
//     },
//   },
// ]);

// Write an aggregation function  to display vendors from Karnataka
// db.Vendors.aggregate([
//   {
//     $match: {
//       vend_state: "Karnataka",
//     },
//   },
//   {
//     $project: {
//       _id: 1,
//       vend_name: 1,
//       vend_city: 1,
//       vend_address: 1,
//     },
//   },
// ]);
// exclusion projection
db.Vendors.aggregate([
  {
    $match: {
      vend_state: "Karnataka",
    },
  },
  {
    $project: {
      vend_state: 0,
      products: 0,
      vend_city: 0,
    },
  },
]);

// write an aggregation to display the total number of vendors
// db.Vendors.aggregate([
//   {
//     $group: {
//       _id: null,
//       total_vendors: { $sum: 1 },
//     },
//   },
// ]);

// write an aggregation function to display the total number of vendors from each state
db.Vendors.aggregate([
  {
    $group: {
      _id: "$vend_state",
      total_vendors: { $sum: 1 },
    },
  },
]);
