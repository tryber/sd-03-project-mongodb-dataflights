db.voos.find({
  "aeroporto.Destino.pais": { $not: "ESTADOS UNIDOS" }
}).count();
