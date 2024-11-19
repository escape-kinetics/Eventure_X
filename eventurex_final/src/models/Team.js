const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the team schema
const teamSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],  // Reference to User model (for team members)
  eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },  // Reference to Event model
  createdAt: { type: Date, default: Date.now }
});

// Create the Team model
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
