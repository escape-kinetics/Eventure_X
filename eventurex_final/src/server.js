const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Connect to the 'users' database
const usersDb = mongoose.createConnection("mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the 'events' database
const eventsDb = mongoose.createConnection("mongodb://127.0.0.1:27017/events", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const teamsDb = mongoose.createConnection("mongodb://127.0.0.1:27017/team", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/events", (req, res) => {
  EventModel.find()
    .then((events) => res.json(events))
    .catch((err) => res.status(500).json({ error: err.message }));
});


// Define models using their respective connections
const UserModel = require("./models/User")(usersDb);
const EventModel = require("./models/Event")(eventsDb);
const TeamModel = require("./models/Team")(teamsDb);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({
            message: "Success",
            user: { id: user._id, name: user.name, email: user.email },
          });
          
        } else {
          res.json({ message: "The password is incorrect" });
        }
      } else {
        res.json({ message: "No record exists" });
      }
    })
    .catch((err) => res.json(err));
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post("/create", (req, res) => {
  EventModel.create(req.body)
    .then((event) => res.json(event))
    .catch((err) => res.json(err));
});

app.post("/join", (req, res) => {
  const { userId, eventId } = req.body;
  if (!userId || !eventId) {
    return res.status(400).json({ message: "User ID or Event ID is missing" });
  }

  UserModel.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Add the event ID to the user's joinedEvents array
      if (!user.joinedEvents.includes(eventId)) {
        user.joinedEvents.push(eventId);  // Add event ID only if it's not already joined
        return user.save();
      }
    })
    .then(() => {
      res.json({ message: "Successfully joined the event" });
    })
    .catch((error) => {
      console.error("Error joining event:", error);
      res.status(500).json({ message: "Internal Server Error" });
    });
});


app.get("/user/:userId/events", (req, res) => {
  const { userId } = req.params;
  UserModel.findById(userId)
    .populate("joinedEvents")  // Make sure to populate the event data if needed
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user.joinedEvents);  // Send back the list of events the user has joined
    })
    .catch((err) => {
      res.status(500).json({ error: "Unable to fetch joined events" });
    });
});


// In your server.js
app.post("/team", (req, res) => {
  TeamModel.create(req.body)
    .then((teams) => res.json(teams))
    .catch((err) => res.json(err));
});

app.post("/team", (req, res) => {
  TeamModel.create(req.body)
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});



// Fetch all teams for an event

// Server listen




app.listen(3001, () => {
  console.log("Server is running");
});
