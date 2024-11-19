const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: String,
});

module.exports = (connection) => {
  return connection.model("Event", EventSchema);
};
