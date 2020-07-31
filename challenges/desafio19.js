db.voos.find({ "litrosCombustivel": { $exists: 0 } }, { "_id": 0, "vooId": 1 }).limit(1);
