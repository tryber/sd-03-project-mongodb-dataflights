// Retorne o `vooId` do primeiro voo em que o campo `litrosCombustivel` exista.
db.voos.find(
  { litrosCombustivel: { $gt: 0 } },
  {
    _id: false,
    vooId: true,
  }
).limit(1);
