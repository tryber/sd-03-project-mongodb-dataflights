db.voos.deleteMany({"empresa.nome": "GOL","passageiros.pagos": { $in: [4,11]}});
