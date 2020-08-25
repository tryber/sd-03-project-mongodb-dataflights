db.voos.findOne({ $and: [
  { "empresa.nome": { $nin: ["GOL","AZUL"] } },
  { litrosCombustivel: { $lte: 600 } },
  { litrosCombustivel: { $exists: 1 } }
] }, {
  _id: 0,
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
});
