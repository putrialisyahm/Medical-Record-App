const mongoose = require("mongoose");

//medicine schema/table
var purchaseSchema = mongoose.Schema({
  medicineName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});
