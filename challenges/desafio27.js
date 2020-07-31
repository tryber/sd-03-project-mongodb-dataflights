db.resumoVoos.insertOne({
  "totalVoosDomesticos": db.voos.find(
    {
      "natureza": "Doméstica",
      "empresa.nome": "PASSAREDO"
    }
  ).count(),
  "empresa": "PASSAREDO"
});

db.resumoVoos.find({}, { "_id": 0 });
