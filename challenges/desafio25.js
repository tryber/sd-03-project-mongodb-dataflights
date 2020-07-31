db.voos.deleteMany(
  { "empresa.nome": "AZUL", "payload": { $lt: 400 } }
);
