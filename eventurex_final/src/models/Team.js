const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the team schema
const teamSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  members: {type: String, required: true  }
});

// Create the Team model
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
