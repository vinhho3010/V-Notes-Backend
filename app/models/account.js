const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const AccountSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes: [{ type: Schema.Type.ObjectId, ref: "note" }],
});

module.exports = mongoose.model("Accounts", AccountSchema);
