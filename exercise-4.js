db.pizzaOrders.find({
  quantity: { $lt: 5 },
  credit_card_type: "mastercard",
});

db.pizzaOrders.find({
  size: "small",
  $and: [{ quantity: { $gte: 1 } }, { quantity: { $lte: 5 } }],
});

db.pizzaOrders.find({
  $and: [{ quantity: { $gte: 10 } }, { credit_card_type: null }],
});
