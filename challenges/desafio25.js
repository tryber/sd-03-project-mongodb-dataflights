db.voos.deleteMany({
  "empresa.nome": "AZUL",
  $and: [
    { "litrosCombustivel": { $exists: true } },
    { "litrosCombustivel": { $lt: 400 } },
  ]
})
