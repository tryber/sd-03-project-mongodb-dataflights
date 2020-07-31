db.voos.find(
  {
    "litrosCombustível": { $not: { $lte: 600 }, $exists: true },
    "empresa.nome": { $nin: ["GOL", "AZUL"] }
  },
  {
    "_id": false,
    "vooId": true,
    "empresa.nome": true,
    "litrosCombustível": true
  }
).limit(1);
