db.resumoVoos.insertOne({"empresa": "PASSAREDO", "totalVoosDomesticos":
  db.voos.find({ 
    $and: [
      {"natureza": "Doméstica"},
      {"empresa.nome": "PASSAREDO"}
    ]
  }).count()
});

db.resumoVoos.findOne({"empresa": "PASSAREDO"}, {"_id": 0});
