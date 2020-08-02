db.voos
  .deleteMany({
    $and: [
      { "passageiros.pagos": { $gt: 5 } },
      { "passageiros.pagos": { $lte: 10 } },
    ],
  });
