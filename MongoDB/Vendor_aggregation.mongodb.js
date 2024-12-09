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
db.Vendors.aggregate([
  {
    $match: {
      vend_state: "Karnataka",
    },
  },
]);
