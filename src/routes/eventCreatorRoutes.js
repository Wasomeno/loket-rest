const { createEvent } = require("../controllers/eventController");
const {
  getAllEventCreators,
  getEventCreatorDetails,
  getEventCreatorEvents,
  updateEventCreatorLogo,
  updateEventCreatorBanner,
  updateEventCreator,
} = require("../controllers/eventCreatorController");

const router = require("express").Router();

router.get("/creators", getAllEventCreators);
router.post("/creators", createEvent);
router.get("/creators/:creatorId", getEventCreatorDetails);
router.patch("/creators/:creatorId", updateEventCreator);

router.get("/creators/:creatorId/events", getEventCreatorEvents);

router.patch("/creators/:creatorId/logo", updateEventCreatorLogo);
router.patch("/creators/:creatorId/banner", updateEventCreatorBanner);

module.exports = router;
