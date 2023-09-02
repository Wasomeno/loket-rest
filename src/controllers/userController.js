const prisma = require("../../prisma/prisma");

async function getUserDetails(req, res) {
  const userEmail = req.params.userEmail;
  const userDetails = await prisma.user.findUnique({
    where: { email: userEmail },
  });
  res.status(200).json(userDetails);
}

async function createUserDetails(req, res) {
  const userDetails = req.body;
  try {
    await prisma.user.create({
      data: {
        email: userDetails.email,
        name: userDetails.name,
        event_creator: {
          create: {
            name: userDetails.event_creator.name,
            address: userDetails.event_creator.address,
            description: userDetails.event_creator.description,
            image_logo: userDetails.event_creator.image_logo,
            image_banner: userDetails.event_creator.image_banner,
          },
        },
      },
    });
  } catch (error) {
    throw error;
  }
}

module.exports = { getUserDetails, createUserDetails };
