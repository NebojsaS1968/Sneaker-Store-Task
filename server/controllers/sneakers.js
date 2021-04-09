const db = require("../db/index");

const getAllSneakers = async (req, res, next) => {
  console.log("Fetching data ...");
  const result = await db.query("SELECT * FROM all_sneakers");

  res.status(200).json({
    status: 200,
    results: result.rows.length,
    data: {
      sneakers: result.rows,
    },
  });
};

const getCart = async (req, res, next) => {
  console.log("Fetching data ...");
  const result = await db.query("SELECT * FROM cart");

  res.status(200).json({
    status: 200,
    results: result.rows.length,
    data: {
      sneakers_history: result.rows,
    },
  });
};

const insertIntoCart = async (req, res, next) => {
  const { id } = req.params;

  const onePair = await db.query("SELECT * FROM all_sneakers WHERE id = $1", [
    id,
  ]);

  const result = await db.query(
    "INSERT INTO cart (id, name, price, img) VALUES ($1, $2, $3, $4) RETURNING *",
    [id, onePair.rows[0].name, onePair.rows[0].price, onePair.rows[0].img]
  );

  res.status(201).json({
    status: 201,
    data: {
      new_history: result.rows[0],
    },
  });
};

const deleteCart = async (req, res, next) => {
  await db.query("DELETE FROM cart");

  res.status(200).json({
    status: 200,
    data: {
      msg: "All the entries are deleted",
    },
  });
};

module.exports = {
  getAllSneakers,
  getCart,
  insertIntoCart,
  deleteCart,
};
