const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connected to mongo db");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(9000, () => {
  console.log("listening to 9000!!! oh yeah");
});
