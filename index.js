const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/Users");
const authRoute = require("./routes/authority");
const postRoute = require("./routes/posting");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/authority", authRoute);
app.use("/api/Users", userRoute);
app.use("/api/posting", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});