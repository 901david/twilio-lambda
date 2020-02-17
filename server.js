require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const htmlRouter = require("./routes/htmlRoutes");
const twilioRouter = require("./routes/twilioRoutes");
const morgan = require("morgan");

morgan("combined");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(twilioRouter);
app.use(htmlRouter);

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, err => {
  if (err) throw err;

  console.log(`Up and Running Successfully on port: ${PORT}`);
});
