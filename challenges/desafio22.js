db.voos.find(
  {
    $and: [
      { $or: [ { "empresa.nome": "DELTA AIRLINES"}, {"empresa.nome": "AMERICAN AIRLINES"} ] },
      { "aeroportoOrigem.sigla": "SBGR" },
      { "aeroportoDestino": "KJFK" }
    ]
  },
  {
    "_id": 0,
    "vooId": 1
  }
);
