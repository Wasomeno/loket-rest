const {
  getAllEvents,
  getEventDetails,
  createEvent,
} = require("../controllers/eventController");

const router = require("express").Router();

router.get("/events", getAllEvents);
router.post("/events", createEvent);
router.get("/events/:eventId", getEventDetails);

module.exports = router;
