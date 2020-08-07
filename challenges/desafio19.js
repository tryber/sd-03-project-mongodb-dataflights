db.voos.findOne(
    {"litrosCombustível":{$exists:true}},
    {"vooId":1, "_id":0}
);
