db.voos.find({}, {"vooId": 1, "_id": 0, "empresa.nome": 1}).limit(3).skip(9);
