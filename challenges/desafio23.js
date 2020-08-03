db.voos.findOne({
  $and: [
    {"litrosCombustivel": { $exists: true}},
    {"litrosCombustivel": { $not: {$gt: 1000}}}
  ]},
  {"vooId": 1, "_id": 0, "litrosCombustivel": 1});
