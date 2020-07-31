db.voos.find(
  { "vooId": 756807 },
  { "empresa.silga": 1, "empresa.name": 1, "passageiros": 1, "_id": 0 }
);
