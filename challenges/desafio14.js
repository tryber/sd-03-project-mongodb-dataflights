db.voos.find({
  "aeroportoOrigem.pais": { $not: "BRASIL" }
}).cout();
