const prisma = require("../../prisma/prisma");

async function getAllEvents(req, res) {
  const allEvents = await prisma.event.findMany({
    include: { category: true, creator: true, region: true },
  });
  res.status(200).json(allEvents);
}

async function getEventDetails(req, res) {
  const eventId = parseInt(req.params.eventId);
  const eventDetails = await prisma.event.findUnique({
    where: { id: eventId },
    include: { category: true, creator: true, region: true },
  });
  res.status(200).json(eventDetails);
}

module.exports = { getAllEvents, getEventDetails };
