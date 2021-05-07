const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const { Schema } = mongoose;

const BookingSchema = new Schema(
  {
    hospital: {
      type: String,
      required: true,
    },
    doctors: [
      {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],
    schedule: {
      type: String,
    },
    user: {
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

const booking = mongoose.model("Booking", BookingSchema);
module.exports = booking;
