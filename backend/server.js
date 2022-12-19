const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { urrorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.BACKEND_PORT || 5001;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

app.use(urrorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
