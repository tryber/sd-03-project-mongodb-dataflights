db.voos.find(
  { litrosCombustivel: { $lt: 1000, $exists: 1 } },
  { vooId: 1, litrosCombustivel: 1 }
).limit(1);
