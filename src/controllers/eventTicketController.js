const prisma = require("../../prisma/prisma");

async function updateEventTicket(req, res) {
  const ticketId = parseInt(req.params.ticketId);
  const ticketDetails = req.body;
  try {
    await prisma.eventTicketType.update({
      where: { id: ticketId },
      data: {
        name: ticketDetails.name,
        amount: ticketDetails.amount,
        description: ticketDetails.description,
        price: ticketDetails.price,
        sale_start: ticketDetails.sale_start,
        sale_end: ticketDetails.sale_end,
      },
    });
    res.status(200).json({ message: "Successfully updated ticket" });
  } catch (error) {
    throw error;
  }
}

async function deleteEventTicket(req, res) {
  const ticketId = parseInt(req.params.ticketId);
  try {
    await prisma.eventTicketType.delete({ where: { id: ticketId } });
    res.status(200).json({ message: "Successfully deleted ticket type" });
  } catch (error) {
    throw error;
  }
}

module.exports = { updateEventTicket, deleteEventTicket };
