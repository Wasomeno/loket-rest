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
    where: { id: parseInt(creatorId) },
    include: {
      events_created: {
        include: { category: true, region: true, creator: true },
      },
    },
  });
  res.status(200).json(creatorDetails);
}

async function getEventCreatorEvents(req, res) {
  const creatorId = parseInt(req.params.creatorId);
  const eventCreator = await prisma.eventCreator.findUnique({
    where: { id: parseInt(creatorId) },
    select: { events_created: true },
  });

  res.status(200).json(eventCreator.events_created);
}

async function updateEventCreator(req, res) {
  const creatorId = parseInt(req.params.creatorId);
  const creatorDetails = req.body;

  try {
    await prisma.eventCreator.update({
      where: { id: creatorId },
      data: {
        name: creatorDetails.name,
        address: creatorDetails.address,
        description: creatorDetails.description,
      },
    });
    res.status(200).json({ message: "Successfully saved user data" });
  } catch (error) {
    throw error;
  }
}

async function updateEventCreatorLogo(req, res) {
  const creatorId = parseInt(req.params.creatorId);
  const { imageURL } = req.body;
  try {
    await prisma.eventCreator.update({
      where: { id: creatorId },
      data: { image_logo: imageURL },
    });
    res
      .status(200)
      .json({ message: "Succesfully updated event creator logo image" });
  } catch (error) {
    throw error;
  }
}

async function updateEventCreatorBanner(req, res) {
  const creatorId = parseInt(req.params.creatorId);
  const { imageURL } = req.body;
  try {
    await prisma.eventCreator.update({
      where: { id: creatorId },
      data: { image_banner: imageURL },
    });
    res
      .status(200)
      .json({ message: "Succesfully updated event creator banner image" });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllEventCreators,
  getEventCreatorDetails,
  getEventCreatorEvents,
  updateEventCreatorLogo,
  updateEventCreatorBanner,
  updateEventCreator,
};
