db.resumoVoos.insertOne({"empresa": "LATAM AIRLINES BRASIL", "totalVoosDomesticos":
  db.voos.find({ 
    $and: [
      {"natureza": {$in: ["Doméstica"]}},
      {"empresa.nome": {$in: ["LATAM AIRLINES BRASIL"]}}
    ]
  }).count()
});

db.resumoVoos.find({"empresa": "LATAM AIRLINES BRASIL"}, {"_id": 0});
