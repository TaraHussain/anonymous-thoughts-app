const express = require("express");
const router = express.Router();

const Anonymous = require("../models/anonymous");

// posts index route
router.get("/", async (req, res) => {
  try {
    const posts = await Anonymous.all;
    res.json({ posts });
  } catch (err) {
    res.status(500).json({ err });
  }
});

// posts show route
router.get("/:id", async (req, res) => {
  try {
    const post = await Anonymous.findById(parseInt(req.params.id));
    res.json(post);
  } catch (err) {
    res.status(404).json({ err });
  }
});

// posts dog route
router.post("/", async (req, res) => {
  try {
    const post = await Anonymous.create(
      req.body.title,
      req.body.pseudonym,
      req.body.body
    );
    res.json(post);
  } catch (err) {
    res.status(404).json({ err });
  }
});
