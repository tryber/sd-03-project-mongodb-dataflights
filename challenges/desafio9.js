db.voos.find({
  $and: [
    { "ano": { gt: 2017 } },
    { "ano": { lt: 2018 } }
  ]
}).count();
