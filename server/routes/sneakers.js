const express = require("express");
const router = express.Router();

const controller = require("../controllers/sneakers");

const { getAllSneakers, getCart, insertIntoCart, deleteCart } = controller;

router.route("/").get(getAllSneakers);

router.route("/cart").get(getCart);
router.route("/cart/:id").post(insertIntoCart);
router.route("/deleteCart").delete(deleteCart);

module.exports = router;
