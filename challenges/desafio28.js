db.resumoVoos.insertOne({
  "totalVoosDomesticos": db.voos.find(
    { "natureza": "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL" }
  ).count(),
  "empresa": "LATAM AIRLINES BRASIL"
});
