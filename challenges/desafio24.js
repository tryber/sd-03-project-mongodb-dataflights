db.voos.findOne({
  $and: [
    {"empresa.nome": {
      $not: {
        $in: ["GOL", "AZUL"]
      }}
    },
    {"litrosCombustivel": { $exists: true}},
    {"litrosCombustivel": { $not: {$gt: 600}}}
  ]},
  {"vooId": 1, "_id": 0, "empresa.nome": 1, "litrosCombustivel": 1});
