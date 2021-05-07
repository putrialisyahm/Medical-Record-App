const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const { Schema } = mongoose;

// medicine schema/table
const MedicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  uses: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
});
