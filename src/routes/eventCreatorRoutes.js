const { createEvent } = require("../controllers/eventController");
const {
  getAllEventCreators,
  getEventCreatorDetails,
} = require("../controllers/eventCreatorController");

const router = require("express").Router();

router.get("/creators", getAllEventCreators);
router.post("/creators", createEvent);
router.get("/creators/:creatorId", getEventCreatorDetails);

module.exports = router;
