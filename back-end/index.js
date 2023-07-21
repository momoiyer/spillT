const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const MONGO_URL =//add mangoDB url plz ;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error) => console.log(error));
mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB");
});

app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", routes);

app.listen(3500, () => {
  console.log("Server running on http://localhost:3500/");
});
