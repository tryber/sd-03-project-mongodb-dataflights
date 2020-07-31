db.voos.find( {
  $and: [ { "empresa.sigla", "empresa.nome", "passageiros"} ,{ vooID: 756807 } ] } 
).pretty();
