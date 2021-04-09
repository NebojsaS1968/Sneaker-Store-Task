const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());

const PORT = 5000 || process.env.PORT;
const sneakers = require("./routes/sneakers");

app.use("/api/v1/sneakers", sneakers);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
