import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

import database from "./configs/database.config";
database.connect();

// Routes
import adminRouteV1 from "./api/v1/routes/admin/index.route";
adminRouteV1(app);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});