const {
  getUserDetails,
  createUserDetails,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/users/:userEmail", getUserDetails);
router.post("/users", createUserDetails);

module.exports = router;
