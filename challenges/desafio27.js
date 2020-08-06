db.resumoVoos.insertMany(
  [
    {
      "empresa": "PASSAREDO",
      "totalVoosDomesticos": db.voos.find(
        {
          $and: [
            { "empresa.nome": "PASSAREDO" },
            { "natureza": "Doméstica" },
          ],
        },
      ).count(),
    },
  ],
);

db.resumoVoos.find(
  { "empresa": "PASSAREDO"},
  {
    "empresa": 1,
    "totalVoosDomesticos": 1,
    "_id": 0,
  }
).limit(1);
