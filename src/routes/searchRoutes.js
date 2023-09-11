const { search } = require("../controllers/searchController");

const router = require("express").Router();

router.get("/search/:searchQuery", search);

module.exports = router;
