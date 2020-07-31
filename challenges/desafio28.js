db.resumoVoos.insertOne({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": db.voos.find(
    { "natureza": "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL" }
  ).count()
});

db.resumoVoos.find({}, { "_id": 0 });
