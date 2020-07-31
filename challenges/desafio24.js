db.voos.find({$and: [{$nor: [{"empresa.nome": "GOL"}, {"empresa.nome": "AZUL"}]},{litrosCombustivel: {$lte: 600}}]}, {vooId: 1, "empresa.nome": 1, litrosCombustivel: 1, _id: 0}).limit(1);
