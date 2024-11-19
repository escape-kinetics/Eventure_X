const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  joinedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }] // This stores the event references
});

module.exports = (connection) => {
  return connection.model("User", UserSchema);
};
