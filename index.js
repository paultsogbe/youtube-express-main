const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// const userRoutes = require("./routes/user");
const videoRoutes = require("./routes/video");

// app.use(userRoutes);
app.use(videoRoutes);

app.get("/", (req, res) => {
  res.json("Welcome to the Youtube API");
});

const server = app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started`);
});
server.timeout = Number(process.env.SERVER_TIMEOUT) || 1000000;
