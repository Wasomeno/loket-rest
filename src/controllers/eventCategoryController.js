const prisma = require("../../prisma/prisma");

async function getAllEventCategory(req, res) {
  const allCategory = await prisma.eventCategory.findMany();
  res.status(200).json(allCategory);
}

async function getEventCategoryDetails(req, res) {
  const categoryId = parseInt(req.params.categoryId);
  const categoryDetails = await prisma.eventCategory.findUnique({
    where: { id: categoryId },
    include: { events: { include: { creator: true, region: true } } },
  });

  res.status(200).json(categoryDetails);
}

module.exports = { getAllEventCategory, getEventCategoryDetails };
