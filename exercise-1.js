db.pizzaOrders.findOne({ customer_name: "Clerc" });

db.pizzaOrders.find({ credit_card_type: "mastercard" });

db.pizzaOrders.find({ size: "medium" }).limit(5);
