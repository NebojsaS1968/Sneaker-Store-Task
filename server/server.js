const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));

const PORT = 5000 || process.env.PORT;
const sneakers = require("./routes/sneakers");

app.use("/api/v1/sneakers", sneakers);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
