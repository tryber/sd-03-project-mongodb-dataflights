tvd = db.voos.count({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: tvd });
db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" });
