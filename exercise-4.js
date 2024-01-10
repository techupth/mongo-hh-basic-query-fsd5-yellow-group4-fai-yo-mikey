db.pizzaOrders.find({ quantity: { $gt: 5 }, credit_card_type: "mastercard" });

db.pizzaOrders.find({ size: "small", quantity: { $gte: 1, $lte: 5 } });

db.pizzaOrders.find({
  $and: [
    { quantity: { $gt: 10 } },
    { credit_card_type: { $ne: "mastercard" } },
  ],
});
