db.voos.find({"aeroportoOrigem.pais":{$not:{$in:["BRASIL"]}}}).count()
