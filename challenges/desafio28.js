const total = db.voos.count({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" });

db.resumoVoos.insert(
  {
    "empresa": "LATAM AIRLINES BRASIL",
    "totalVoosDomesticos": total
  }
);

db.resumoVoos.find(
  { empresa: "LATAM AIRLINES BRASIL" },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1}
).limit(1);
