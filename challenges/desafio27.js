totalDeVoos = db.voos.find(
  {
    "natureza": "Doméstica",
    "empresa.nome": "PASSAREDO"
  }
).count();

db.resumoVoos.insertOne({
  "totalVoosDomesticos": totalDeVoos,
  "empresa": "PASSAREDO"
});

db.resumoVoos.find({}, { "_id": 0 });
