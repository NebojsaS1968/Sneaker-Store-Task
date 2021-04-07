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

const getSneakerHistory = async (req, res, next) => {
  console.log("Fetching data ...");
  const result = await db.query("SELECT * FROM history");

  res.status(200).json({
    status: 200,
    results: result.rows.length,
    data: {
      sneakers_history: result.rows,
    },
  });
};

const insertSneakersHistory = async (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;

  const result = await db.query(
    "INSERT INTO history (id, name, price) VALUES ($1, $2) RETURNING *",
    [name, price]
  );

  res.status(201).json({
    status: 201,
    data: {
      new_history: result.rows[0],
    },
  });
};

module.exports = {
  getAllSneakers,
  getSneakerHistory,
  insertSneakersHistory,
};
