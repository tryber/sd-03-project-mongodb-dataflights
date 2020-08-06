db.resumoVoos.insertMany(
  [
    {
      "empresa": db.voos.find(
        {
          "empresa.nome": "LATAM AIRLINES BRASIL",
        },
        {
          "empresa.nome": 1,
          "_id": 0,
        },
      ).limit(1),
      "totalVoosDomesticos": db.voos.find(
        {
          $and: [
            { "empresa.nome": {
                $in: [
                  "LATAM AIRLINES BRASIL",
                ],
              },
            },
            { "natureza": "Doméstica" },
          ],
        },
      ).count(),
    },
  ],
);

db.resumoVoos.find(
  { "empresa": db.voos.find(
      {
      "empresa.nome": "LATAM AIRLINES BRASIL",
      },
      {
      "empresa.nome": 1,
      "_id": 0,
      },
    ).limit(1),
  },
  {
    "empresa": 1,
    "totalVoosDomesticos": 1,
    "_id": 0,
  }
).limit(1);
