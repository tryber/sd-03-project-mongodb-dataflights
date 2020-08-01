db.voos.findOne({litrosCombustivel:{$gte:600},"empresa.nome":{$not:{$in:["GOL","AZUL"]}}},{vooId:1,litrosCombustivel:1,"empresa.nome":1})
