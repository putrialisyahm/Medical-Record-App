const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const passport = require("passport");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
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

const user = mongoose.model("User", UserSchema);
module.exports = user;
