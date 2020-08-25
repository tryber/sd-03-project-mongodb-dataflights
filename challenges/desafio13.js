db.voos.count({ "aeroportoDestino.continente": {
  $nin: ["EUROPA", "ÁSIA", "OCEANIA"]
} });

// db.voos.count({
//   $nor: [
//     { "aeroportoDestino.continente": "EUROPA" },
//     { "aeroportoDestino.continente": "ÁSIA" },
//     { "aeroportoDestino.continente": "OCEANIA" }
//   ]
// });
