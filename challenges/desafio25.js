db.voos.delete(
  { "empresa.nome": "AZUL", "payload": { $lt: 400 } }
).deletedCount;
