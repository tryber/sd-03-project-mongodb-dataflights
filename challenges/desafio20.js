db.voos.find(
  { "rtk": { $exists: 0 } },
  { "vooId": true, "_id": false }
).limit(1);
