totalDeVoos = db.voos.find(
  {
    "natureza": "Doméstica",
    "empresa.nome": "PASSAREDO"
  }
).count();

db.resumoVoos.insertOne({
  "empresa": "PASSAREDO",
  "totalVoosDomesticos": totalDeVoos
});

db.resumoVoos.find({}, { "_id": 0 });
