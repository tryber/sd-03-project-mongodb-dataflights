db.resumoVoos.insertMany(
  [
    {
      "empresa": "LATAM AIRLINES BRASIL",
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
  {
    "empresa": {
      $in:
      [
        "LATAM AIRLINES BRASIL",
      ],
    } 
  },
  {
    "empresa": 1,
    "totalVoosDomesticos": 1,
    "_id": 0,
  },
).limit(1);
