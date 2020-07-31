db.resumoVoos.insertMany([
  {
    "empresa": "LATAM AIRLINES BRASIL" ,
    "totalVoosDomesticos": db.resumoVoos.find({
      $and: 
        [
          { "empresa.nome": "LATAM AIRLINES BRASIL" },
          { "natureza": "Doméstica" }
        ]
    }).count()
  }
]);

db.resumoVoos.find(
  { "empresa": "LATAM AIRLINES BRASIL" },
  {
    "_id": 0,
    "empresa": 1,
    "totalVoosDomesticos": 1
  }
);
