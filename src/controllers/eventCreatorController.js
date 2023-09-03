const prisma = require("../../prisma/prisma");

async function getAllEventCreators(req, res) {
  const allEventCreators = await prisma.eventCreator.findMany({
    include: { events_created: { include: { category: true, region: true } } },
  });
  res.status(200).json();
}

async function getEventCreatorDetails(req, res) {
  const creatorId = parseInt(req.params.creatorId);
  const creatorDetails = await prisma.eventCreator.findUnique({
    where: { id: creatorId },
    include: {
      events_created: {
        include: { category: true, region: true, creator: true },
      },
    },
  });

  res.status(200).json(creatorDetails);
}

module.exports = { getAllEventCreators, getEventCreatorDetails };
