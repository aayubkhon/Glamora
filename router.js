const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

router.get("/", memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);

router.get("/shop", (req, res) => {
  res.send("shop page");
});

router.get("/community", (req, res) => {
  res.send("community page");
});

module.exports = router;
