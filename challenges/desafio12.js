db.voos.count({ "aeroportoDestino.pais": {
  $in: ["BRASIL", "ARGENTINA", "CHILE"]
} });

// db.voos.count({ $or: [
//   { "aeroportoDestino.pais": "BRASIL" },
//   { "aeroportoDestino.pais": "ARGENTINA" },
//   { "aeroportoDestino.pais": "CHILE" }
// ] });
