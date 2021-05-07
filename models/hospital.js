const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const { Schema } = mongoose;

const HospitalSchema = new Schema(
  {
    name: {
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
    address: {
      type: String,
    },
    telp: {
      type: String,
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

const hospital = mongoose.model("Hospital", HospitalSchema);
module.exports = hospital;
