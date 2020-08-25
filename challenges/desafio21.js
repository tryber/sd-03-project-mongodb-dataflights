db.voos.findOne({ litrosCombustivel: { $gte: 1 } }, {
  _id: 0,
  vooId: 1,
});
