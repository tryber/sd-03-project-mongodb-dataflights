const totalVoosDomesticos = db.voos.find({
  "natureza": "Doméstica",
  "empresa.nome": "PASSAREDO",
}).count();

db.createCollection("resumoVoos", {
  "empresa": "PASSAREDO",
  "totalVoosDomesticos": totalVoosDomesticos
});

db.resumoVoos.find({
  "empresa": "PASSAREDO"
},
{ "_id": 0, "empresa": 1, "totalVoosDomesticos": 1}).limit(1);
