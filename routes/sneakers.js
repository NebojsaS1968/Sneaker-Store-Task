const express = require("express");
const router = express.Router();

const controller = require("../controllers/sneakers");

const { getAllSneakers, getSneakerHistory } = controller;

router.route("/").get(getAllSneakers);

router.route("/history").get(getSneakerHistory);

module.exports = router;
