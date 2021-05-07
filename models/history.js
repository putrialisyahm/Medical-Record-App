const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const { Schema } = mongoose;

const HistorySchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    purchase: {
      type: String,
    },
    booking: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      // Add timestamps to the Schema
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    versionKey: false,
    toJSON: { getters: true },
  }
);

const history = mongoose.model("History", HistorySchema);
module.exports = history;
