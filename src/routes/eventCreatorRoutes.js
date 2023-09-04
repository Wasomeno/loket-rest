const { createEvent } = require("../controllers/eventController");
const {
  getAllEventCreators,
  getEventCreatorDetails,
  getEventCreatorEvents,
} = require("../controllers/eventCreatorController");

const router = require("express").Router();

router.get("/creators", getAllEventCreators);
router.post("/creators", createEvent);
router.get("/creators/:creatorId", getEventCreatorDetails);
router.get("/creators/:creatorId/events", getEventCreatorEvents);

module.exports = router;
