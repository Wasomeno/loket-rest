const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const eventCategoryRoutes = require("../src/routes/eventCategoryRoutes");
const eventCreatorRoutes = require("../src/routes/eventCreatorRoutes");
const eventRoutes = require("../src/routes/eventRoutes");
const userRoutes = require("../src/routes/userRoutes");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(eventCategoryRoutes);
app.use(eventCreatorRoutes);
app.use(eventRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
