const UserEventSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    eventId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Event" },
  });
  

module.exports = (connection) => {
  return connection.model("UserEvent", UserEventSchema);
};

const UserEventModel = require("./models/UserEvent")(usersDb);
