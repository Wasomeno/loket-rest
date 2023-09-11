const { query } = require("express");
const prisma = require("../../prisma/prisma");

async function getAllEvents(req, res) {
  const { categoryId, time, sort } = req.query;
  const allEvents = await prisma.event.findMany({
    include: { category: true, creator: true, region: true },
    orderBy: sort !== undefined ? JSON.parse(sort) : {},
    where:
      categoryId || time
        ? {
            category: categoryId
              ? {
                  id: { equals: parseInt(req.query.categoryId) },
                }
              : {},
            date_time_start: time
              ? { gte: new Date(), lte: new Date(time) }
              : {},
          }
        : {},
  });
  res.status(200).json(allEvents);
}

async function getEventDetails(req, res) {
  const eventId = parseInt(req.params.eventId);
  const eventDetails = await prisma.event.findUnique({
    where: { id: eventId },
    include: {
      category: true,
      creator: true,
      region: true,
      ticket_types: true,
    },
  });
  res.status(200).json(eventDetails);
}

async function createEvent(req, res) {
  const eventDetails = req.body;
  try {
    await prisma.event.create({
      data: {
        title: eventDetails.title,
        place: "testplace",
        min_ticket_price: 100000,
        category: { connect: { id: parseInt(eventDetails.category_id) } },
        region: { connect: { id: 1 } },
        creator: { connect: { id: parseInt(eventDetails.creator_id) } },
        date_time_start: eventDetails.dateTimeStart,
        date_time_end: eventDetails.dateTimeEnd,
        description: eventDetails.description,
        ticket_types: { createMany: { data: eventDetails.ticketTypes } },
      },
    });
    res.status(200).json({ message: "Succesfully add new event" });
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllEvents, getEventDetails, createEvent };
