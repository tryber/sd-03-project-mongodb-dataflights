db.voos.find({}, {
  "vooId": 1,
  "_id": 0
}).skip(10).limit(2);
