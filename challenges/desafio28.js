totalVoosLatam = db.voos.find({
  "empresa.nome": "LATAM AIRLINES BRASIL",
  "natureza": "Doméstica"
}).count();

db.resumoVoos.insertOne({
  "empresa": "LATAM AIRLINES BRASIL",
  "totalVoosDomesticos": totalVoosLatam
});

db.resumoVoos.findOne({"empresa": "LATAM AIRLINES BRASIL"}, { "_id": 0 });
