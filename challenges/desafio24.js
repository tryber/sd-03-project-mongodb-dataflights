db.voos.findOne({litrosCombustivel:{$lte:600},"empresa.nome":{$not:{$in:["GOL","AZUL"]}}},{vooId:1,litrosCombustivel:1,"empresa.nome":1})
