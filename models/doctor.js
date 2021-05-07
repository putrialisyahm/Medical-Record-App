const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const { Schema } = mongoose;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const doctor = mongoose.model("Doctor", DoctorSchema);
module.exports = doctor;
