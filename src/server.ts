import express from "express";
import {
  ADVENTURE_ADMIN,
  MYSTERIOUS_ROBED_FIGURE,
} from "./constants/characters";
import { CAVE_EXTERIOR, HANDFORTH_PARISH_COUNCIL } from "./constants/locations";

const app = express();

app.get("/", (req, res) => {
  res.json({
    location: CAVE_EXTERIOR,
    speech: {
      speaker: MYSTERIOUS_ROBED_FIGURE,
      text: "Welcome, young adventurer, to the ENDPOINT ADVENTURE. Are you ready for this quest?",
    },
    options: {
      yes: "/quest/accept",
      no: "/quest/decline",
      help: "/help",
    },
  });
});

app.get("/help", (req, res) => {
  res.json({
    location: HANDFORTH_PARISH_COUNCIL,
    speech: {
      speaker: ADVENTURE_ADMIN,
      text: "This is the endpoint adventure! It's based on the classic 'choose your own adventure' books of ye olden 20th century times. When you visit an endpoint, you're presented with a scene and some text, and then you have a few options to choose from - your simulate turning to a new page by hitting a new endpoint.",
    },
    options: {
      backToStart: "/",
    },
  });
});

app.get("/quest/accept", (req, res) => {
  res.json({
    location: CAVE_EXTERIOR,
    speech: {
      speaker: MYSTERIOUS_ROBED_FIGURE,
      text: "Ah, yes, that is a wise decision. Now, tell me, what sort of questing experience do you have?",
    },
    options: {
      rookie: "/quest/start/easy",
      pro: "/quest/start/hard",
      "completed it, m8": "/quest/start/impossible",
    },
  });
});

app.get("/quest/decline", (req, res) => {
  res.json({
    location: "Apocalypse",
    speech: {
      speaker: {
        name: "Titan, Destroyer of Worlds",
        description: "A short but fierce looking demon-thing",
      },
      text: "You FOOL! You have made a mistake. Now you will suffer.",
    },
    options: {
      restart: "/",
    },
  });
});

app.get("/quest/start/impossible", (req, res) => {
  res.json({
    location: "The Dragon's Den",
    speech: {
      speaker: {
        name: "Dragon 47",
      },
      text: "A furious dragon fired a scorching fireball which you took a direct hit. Your could not withstand the excruciating pain and gave up.",
    },
    options: {
      restart: "/",
    },
  });
});

app.get("/quest/start/easy", (req, res) => {
  res.json({
    location: "The Farm",
    speech: {
      speaker: {
        name: "Tiger 32",
      },
      text: "It will not be easy to get this tiger out of your way.",
    },
    options: {
      restart: "/",
    },
  });
});

app.get("/quest/start/hard", (req, res) => {
  res.json({
    location: "The Volcano",
    speech: {
      speaker: {
        name: "Giant Mammoth 44",
      },
      text: "Hard mode? Are you sure you can defeat this Giant Mammoth?",
    },
    options: {
      restart: "/",
    },
  });
});

export default app;
