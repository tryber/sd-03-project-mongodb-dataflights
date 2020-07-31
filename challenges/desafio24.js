db.voos.find(
  {
    $and:
      [
        { "litrosCombustivel": { gt: 600 } },
        { $or: [ { "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" } ] },
        { "litrosCombustivel": { exists: true } }
      ]
  },
  {
    "_id": 0,
    "vooId": 1,
    "empresa.nome": 1,
    "litrosCombusivel": 1
  }
);
