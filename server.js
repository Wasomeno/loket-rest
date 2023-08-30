const express = require("express");
const eventCategoryRoutes = require("./src/routes/eventCategoryRoutes");
const eventRoutes = require("./src/routes/eventRoutes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(eventCategoryRoutes);
app.use(eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
