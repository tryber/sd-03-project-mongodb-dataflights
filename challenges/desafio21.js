db.voos.find({ "litrosCombustivel": { $gte: 1000 }}, { "_id": false, "vooId": true }).limit(1);
