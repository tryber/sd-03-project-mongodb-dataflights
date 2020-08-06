db.voos.count({
  "empresa.nome" : "PASSAREDO",
  "natureza" : "Doméstica"
});

db.resumoVoos.insert({
  "empresa" : "PASSAREDO",
  "totalVoosDomesticos" : 4187,
});

db.resumoVoos.find({
  "empresa" : "PASSAREDO",
}, {
  "_id" : 0,
  "empresa" : 1,
  "totalVoosDomesticos" : 1,
});
