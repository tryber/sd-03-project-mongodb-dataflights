db.resumoVoos.insertMany([
  {
    "empresa":"PASSAREDO",
    "totalVoosDomesticos":4187
  }
]);
db.resumoVoos.find({"empresa":"PASSAREDO"},{"_id":0});
