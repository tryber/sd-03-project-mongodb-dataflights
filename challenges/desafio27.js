db.resumoVoos.insertMany([
  { 
    "empresa": "PASSAREDO",
    "totalVoosDomesticos": db.voos.find({ 
      $and: 
        [
          { "empresa.nome": "PASSAREDO" },
          { "natureza": "Domestica" }
        ]
    }).count(),
  }
]);

db.resumoVoos.find(
  { "empresa": "PASSAREDO" }, 
  {
    "_id": false,
    "empresa": true,
    "totalVoosDomesticos": true
  }
);
