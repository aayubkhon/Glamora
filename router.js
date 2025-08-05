const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("home page");
});

router.get("/shop", (req, res) => {
  res.send("shop page");
});

router.get("/community", (req, res) => {
  res.send("community page");
});

module.exports = router;
