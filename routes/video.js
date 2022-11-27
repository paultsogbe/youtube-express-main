const express = require("express");
const router = express.Router();
const axios = require("axios");

const videos = require("../data/metadata_example.json");

router.get("/videos", async (req, res) => {
  try {
    let page;
    if (Number(req.query.page) < 1) {
      page = 1;
    } else {
      page = Number(req.query.page);
    }

    let limit = Number(req.query.limit) || 5;

    const response = videos;

    res.json(response);
    console.log(response);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

router.get("/video/:id", async (req, res) => {
  const id = await req.params.id;
  const video = videos.find((obj) => obj.id === id);

  console.log(id);
  res.json(video);
  console.log(video);
});

module.exports = router;
