const express = require("express");
require("dotenv").config();

const PORT = 5000 || process.env.PORT;
const sneakers = require("./routes/sneakers");

const app = express();

app.use("/api/v1/sneakers", sneakers);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
