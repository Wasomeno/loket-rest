const prisma = require("../../prisma/prisma");
const {
  getAllEventCategory,
  getEventCategoryDetails,
} = require("../controllers/eventCategoryController");

const router = require("express").Router();

router.get("/categories", getAllEventCategory);

router.get("/categories/:categoryId", getEventCategoryDetails);

module.exports = router;
