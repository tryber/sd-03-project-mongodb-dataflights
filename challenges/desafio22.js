db.voos.find({
  "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
  "aeroportoOrigem.sigla": "SBGR",
  "aeroportoDestino": "KJFK"
},
  { "_id": false, "vooId": true }
).limit(1);
