const {
  getAllEvents,
  getEventDetails,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const {
  updateEventTicket,
  deleteEventTicket,
} = require("../controllers/eventTicketController");

const router = require("express").Router();

router.get("/events", getAllEvents);
router.post("/events", createEvent);
router.get("/events/:eventId", getEventDetails);
router.put("/events/:eventId", updateEvent);
router.delete("/events/:eventId", deleteEvent);
router.put("/events/:eventId/tickets/:ticketId", updateEventTicket);
router.delete("/events/:eventId/tickets/:ticketId", deleteEventTicket);

module.exports = router;
