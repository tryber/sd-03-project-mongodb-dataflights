db.voos.find({ "litrosCombustivel": { $lte: 1000 }}, { "_id": false, "vooId": true });
