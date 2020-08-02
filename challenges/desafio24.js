db.voos.find(
  { litrosCombustivel: { $lte: 400 } },
  { vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 }
).limit(1);
