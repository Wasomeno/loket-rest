const {
  getAllEvents,
  getEventDetails,
} = require("../controllers/eventController");

const router = require("express").Router();

router.get("/events", getAllEvents);
router.get("/events/:eventId", getEventDetails);

module.exports = router;
