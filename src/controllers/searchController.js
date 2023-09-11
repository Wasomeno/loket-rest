const prisma = require("../../prisma/prisma");

async function search(req, res) {
  const searchQuery = req.params.searchQuery;
  const eventResults = prisma.event.findMany({
    where: { title: { search: searchQuery } },
    include: { creator: true },
  });
  const eventCreatorResults = prisma.eventCreator.findMany({
    where: { name: { search: searchQuery } },
  });
  const regionResults = prisma.eventRegion.findMany({
    where: { name: { search: searchQuery } },
  });

  const results = await Promise.all([
    eventResults,
    eventCreatorResults,
    regionResults,
  ]);
  res
    .status(200)
    .json({
      events: results[0],
      eventCreators: results[1],
      regions: results[2],
    });
}

module.exports = { search };
