db.voos.find(
  { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"]},
  "aeroportoOrigem.sigla":"SBGR",
  "aeroportoDestino.sigla":"KJFK"
},
  { vooId: 1, litrosCombustivel: 1 }
).limit(1);
