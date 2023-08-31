const express = require("express");
const cors = require("cors");

const eventCategoryRoutes = require("../src/routes/eventCategoryRoutes");
const eventRoutes = require("../src/routes/eventRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(eventCategoryRoutes);
app.use(eventRoutes);

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
