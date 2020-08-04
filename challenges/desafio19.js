db.voos.find(
  { litrosCombustivel: { $gt: 0 } },
  {
    _id: false,
    vooId: true,
  }
).limit(1);
