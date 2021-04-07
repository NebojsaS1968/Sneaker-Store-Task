const express = require("express");
const router = express.Router();

const controller = require("../controllers/sneakers");

const { getAllSneakers, getSneakerHistory, insertSneakersHistory } = controller;

router.route("/").get(getAllSneakers);

router.route("/history").get(getSneakerHistory).post(insertSneakersHistory);

module.exports = router;
