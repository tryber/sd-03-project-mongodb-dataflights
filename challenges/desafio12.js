db.voos.find({
  $or: [
    { "aeroportoDestino.pais": {$eq: "BRASIL"}},
    { "aeroportoDestino.pais": {$eq: "ARGENTINA"}},
    { "aeroportoDestino.pais": {$eq: "CHILE"}}
  ]
}, { "_id": 0}).count();
